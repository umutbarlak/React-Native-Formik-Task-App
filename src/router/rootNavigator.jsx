import {StyleSheet} from 'react-native';
import React from 'react';
import Home from '../screens/home';
import {ADDTASK, HOME, LISTTASKS, TASKDETAIL} from '../utils/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddTask from '../screens/addTask';
import TaskDetail from '../screens/taskDetail';
import ListTasks from '../screens/listTasks';
import {getStatus} from '../utils/functions';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={ADDTASK} component={AddTask} />
      <Stack.Screen name={TASKDETAIL} component={TaskDetail} />
      <Stack.Screen
        options={({route}) => ({
          title: getStatus(route.params?.status) || 'Görevler',
        })}
        name={LISTTASKS}
        component={ListTasks}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
