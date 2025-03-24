import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {TASKDETAIL} from '../../utils/routes';
import {formatedDate, statusIcon} from '../../utils/functions';

const TaskCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(TASKDETAIL, {item})}
      style={styles.container}>
      {statusIcon(item.status)}
      <View style={{flex: 1}}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>{item.title}</Text>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: AppColors.GRAY,
            marginVertical: 5,
          }}>
          {item.description}
        </Text>
        <View style={styles.dateRow}>
          <Text style={styles.date}>{formatedDate(item.startDate)}</Text>
          <Text>-</Text>
          <Text style={styles.date}>{formatedDate(item.endDate)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: AppColors.WHITE,
    borderRadius: 10,
  },
  dateRow: {
    flexDirection: 'row',
    gap: 5,
  },
  date: {
    fontSize: 12,
    fontWeight: '600',
    color: AppColors.GRAY,
  },
});
