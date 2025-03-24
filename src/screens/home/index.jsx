import {FlatList, RefreshControl, SafeAreaView, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Header from '../../components/home/header';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDTASK, HOME} from '../../utils/routes';
import TaskCard from '../../components/home/taskCard';
import {getAsyncTask} from '../../services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

const Home = ({navigation, route}) => {
  const [tasks, setTasks] = useState([]);
  const [ongoing, setOngoing] = useState(0);
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [cancel, setCancel] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const statusCountCalculate = tasks => {
    let ongoingCount = 0;
    let pendingCount = 0;
    let completedCount = 0;
    let cancelCount = 0;

    tasks?.forEach(task => {
      if (task.status === 1) {
        ongoingCount += 1;
      }
      if (task.status === 2) {
        pendingCount += 1;
      }
      if (task.status === 3) {
        completedCount += 1;
      }
      if (task.status === 4) {
        cancelCount += 1;
      }
    });

    setOngoing(ongoingCount);
    setPending(pendingCount);
    setCompleted(completedCount);
    setCancel(cancelCount);
  };

  console.log(route);

  const getTasks = useCallback(() => {
    getAsyncTask()
      .then(tasks => {
        setTasks(tasks);
        statusCountCalculate(tasks);
      })
      .catch(error => console.log(error));
  }, []);

  useFocusEffect(
    useCallback(() => {
      getTasks(); // Sayfa her odaklandığında verileri güncelle
    }, [getTasks]),
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getTasks();
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={
          <Header
            ongoing={ongoing}
            pending={pending}
            completed={completed}
            cancel={cancel}
          />
        }
        contentContainerStyle={{gap: 15, padding: 10}}
        data={tasks}
        renderItem={({item}) => <TaskCard item={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDTASK)} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
