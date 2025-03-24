import AsyncStorage from '@react-native-async-storage/async-storage';

const getAsyncTask = async status => {
  try {
    const tasks = JSON.parse(await AsyncStorage.getItem('tasks'));

    if (status) {
      const filtered = tasks.filter(i => i.status === status);
      return filtered;
    }

    return tasks;
  } catch (error) {
    console.log(error);
  }
};

const addAsyncTask = async values => {
  try {
    const savedTasks = JSON.parse(await AsyncStorage.getItem('tasks')) || [];

    savedTasks.push(values);

    await AsyncStorage.setItem('tasks', JSON.stringify(savedTasks));

    return savedTasks;
  } catch (error) {
    console.log(error);
  }
};

const updateAsyncTask = async newTask => {
  try {
    const savedTasks = JSON.parse(await AsyncStorage.getItem('tasks')) || [];

    const newArray = savedTasks.map(i => (i.id === newTask.id ? newTask : i));

    await AsyncStorage.setItem('tasks', JSON.stringify(newArray));
  } catch (error) {
    console.log(error);
  }
};

const deleteAsyncTask = async id => {
  const tasks = JSON.parse(await AsyncStorage.getItem('tasks')) || [];

  const filtered = tasks.filter(i => i.id !== id);

  await AsyncStorage.setItem('tasks', JSON.stringify(filtered));
};

export {getAsyncTask, addAsyncTask, updateAsyncTask, deleteAsyncTask};
