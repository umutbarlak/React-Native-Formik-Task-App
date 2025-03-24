import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {Input, RadioGroup, Radio, Button} from '@ui-kitten/components';
import CustomDatePicker from '../../components/ui/customDatePicker';
import {taskShema} from '../../utils/validation';
import {addAsyncTask, updateAsyncTask} from '../../services';
import {HOME} from '../../utils/routes';
import uuid from 'react-native-uuid';
import {status} from '../../utils/constants';

const AddTask = ({navigation, route}) => {
  const editTask = route?.params?.item;

  const handleSubmit = async values => {
    if (editTask) {
      updateAsyncTask({...editTask, ...values}).then(() =>
        navigation.navigate(HOME),
      );
    } else {
      const newTask = {
        ...values,
        id: uuid.v4(),
        status: status.ONGOING,
      };

      addAsyncTask(newTask).then(() => navigation.navigate(HOME));
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          title: editTask?.title ?? '',
          description: editTask?.description ?? '',
          startDate: editTask ? new Date(editTask.startDate) : null,
          endDate: editTask ? new Date(editTask.endDate) : null,
          category: editTask?.category ?? null,
        }}
        onSubmit={values => {
          handleSubmit(values);
        }}
        validationSchema={taskShema}>
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          setFieldValue,
          touched,
        }) => (
          <View style={styles.innerContainer}>
            <Input
              status={touched.title && errors.title ? 'danger' : 'basic'}
              caption={touched.title && errors.title ? errors.title : ''}
              size="large"
              label={'Title'}
              value={values.title}
              onChangeText={handleChange('title')}
            />

            <Input
              multiline
              status={
                touched.description && errors.description ? 'danger' : 'basic'
              }
              caption={
                touched.description && errors.description
                  ? errors.description
                  : ''
              }
              size="large"
              label={'Description'}
              value={values.description}
              onChangeText={handleChange('description')}
            />

            <CustomDatePicker
              status={
                touched.startDate && errors.startDate ? 'danger' : 'basic'
              }
              caption={
                touched.startDate && errors.startDate ? errors.startDate : ''
              }
              size="large"
              label="Start Date"
              date={values.startDate}
              onSelect={nextDate => setFieldValue('startDate', nextDate)}
            />
            <CustomDatePicker
              caption={touched.endDate && errors.endDate ? errors.endDate : ''}
              status={touched.endDate && errors.endDate ? 'danger' : 'basic'}
              size="large"
              label="End Date"
              date={values.endDate}
              onSelect={nextDate => setFieldValue('endDate', nextDate)}
            />

            <RadioGroup
              selectedIndex={values.category}
              onChange={value => setFieldValue('category', value)}>
              <Radio status="success">Software</Radio>
              <Radio status="success">Desing</Radio>
              <Radio status="success">Operation</Radio>
            </RadioGroup>

            <Button status="success" onPress={() => handleSubmit(values)}>
              EKLE
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  innerContainer: {
    gap: 20,
  },
});
