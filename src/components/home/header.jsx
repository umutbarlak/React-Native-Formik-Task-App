import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderCard from './headerCard';
import AppColors from '../../theme/colors';
import {
  ChartCircle,
  Clock,
  CloseCircle,
  TickCircle,
} from 'iconsax-react-native';

const Header = ({ongoing, pending, completed, cancel}) => {
  const headerTasks = [
    {
      id: 1,
      status: 1,
      title: 'Ongoing',
      color: AppColors.ONGOING,
      icon: <ChartCircle size={32} color={AppColors.WHITE} />,
      count: ongoing,
    },
    {
      id: 2,
      status: 2,
      title: 'Pending',
      color: AppColors.PENDING,
      icon: <Clock size={32} color={AppColors.WHITE} />,
      count: pending,
    },
    {
      id: 3,
      status: 3,
      title: 'Completed',
      color: AppColors.COMPLATED,
      icon: <TickCircle size={32} color={AppColors.WHITE} />,
      count: completed,
    },
    {
      id: 4,
      status: 4,
      title: 'Cancel',
      color: AppColors.CANCEL,
      icon: <CloseCircle size={32} color={AppColors.WHITE} />,
      count: cancel,
    },
  ];

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
      }}>
      {headerTasks.map(item => (
        <HeaderCard item={item} key={item.id} />
      ))}
      <View>
        <Text style={{fontSize: 21, fontWeight: '600'}}>All Tasks</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
