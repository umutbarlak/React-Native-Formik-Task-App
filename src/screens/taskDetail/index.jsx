import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@ui-kitten/components';
import AppColors from '../../theme/colors';
import {formatedDate, getCategory, getStatus} from '../../utils/functions';
import {Edit, Trash} from 'iconsax-react-native';
import {ADDTASK, HOME} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {deleteAsyncTask, updateAsyncTask} from '../../services';
import {status} from '../../utils/constants';

const TaskDetail = ({route}) => {
  const navigation = useNavigation();
  const task = route?.params?.item;

  const changeStatus = status => {
    task.status = status;
    updateAsyncTask(task).then(() => {
      navigation.goBack();
    });
  };

  const deleteTask = () => {
    deleteAsyncTask(task.id).then(() => navigation.navigate(HOME));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 10,
          }}>
          <Button
            onPress={() => navigation.navigate(ADDTASK, {item: task})}
            size="small"
            style={{
              backgroundColor: AppColors.BLUE,
              color: AppColors.WHITE,
              borderWidth: 0,
            }}
            status="warning">
            <Edit size="20" color={AppColors.WHITE} />
          </Button>
          <Button
            size="small"
            style={{
              backgroundColor: AppColors.RED,
              color: AppColors.WHITE,
              borderWidth: 0,
            }}
            onPress={deleteTask}>
            <Trash size="20" color={AppColors.WHITE} />
          </Button>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.key}>Title:</Text>
          <Text style={styles.value}>{task.title}</Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.key}>Description:</Text>
          <Text style={styles.value}>{task.description}</Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.key}>Start Date:</Text>
          <Text style={styles.value}>{formatedDate(task.startDate)}</Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.key}>End Date:</Text>
          <Text style={styles.value}>{formatedDate(task.endDate)}</Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.key}>Status:</Text>
          <Text style={styles.value}>{getStatus(task.status)}</Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.key}>Category</Text>
          <Text style={styles.value}>{getCategory(task.category)}</Text>
        </View>
      </ScrollView>
      <View style={styles.btnWrapper}>
        <Button status="info" onPress={() => changeStatus(status.ONGOING)}>
          START
        </Button>
        <Button
          activeOpacity={0.5}
          style={{
            backgroundColor: AppColors.PENDING,
            color: AppColors.WHITE,
            borderWidth: 0,
          }}
          onPress={() => changeStatus(status.PENDING)}>
          PENDING
        </Button>
        <Button status="success" onPress={() => changeStatus(status.COMPLATED)}>
          COMPLETED
        </Button>
        <Button status="danger" onPress={() => changeStatus(status.CANCEL)}>
          CANCEL
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  btnWrapper: {
    padding: 10,
    gap: 10,
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: AppColors.GRAY,
  },
  key: {
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: AppColors.GRAY,
    flex: 1,
    textAlign: 'right',
  },
});
