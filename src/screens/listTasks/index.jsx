import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAsyncTask} from '../../services';
import TaskCard from '../../components/home/taskCard';
import {getStatus} from '../../utils/functions';

const ListTasks = ({route}) => {
  const [tasks, settasks] = useState([]);
  const status = route?.params?.status;

  useEffect(() => {
    getAsyncTask(status)
      .then(tasks => {
        settasks(tasks);
      })
      .catch(error => console.log(error));
  }, []);

  if (tasks.length < 1) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>
          Listelenecek task yok
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={{gap: 15, padding: 10}}
      data={tasks}
      renderItem={({item}) => <TaskCard item={item} />}
    />
  );
};

export default ListTasks;

const styles = StyleSheet.create({});
