import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColors from '../../theme/colors';

const ListValue = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.key}>{item[0]}:</Text>
      <Text style={styles.value}>{item[1]}</Text>
    </View>
  );
};

export default ListValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
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
  },
});
