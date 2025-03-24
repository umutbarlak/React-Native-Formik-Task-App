import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ArrowCircleRight2} from 'iconsax-react-native';
import AppColors from '../../theme/colors';
import {screenWidth} from '../../utils/screen';
import {useNavigation} from '@react-navigation/native';
import {LISTTASKS} from '../../utils/routes';
import {getStatus} from '../../utils/functions';

const HeaderCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(LISTTASKS, {status: item.status});
      }}
      style={{
        padding: 10,
        borderRadius: 10,
        backgroundColor: item.color,
        width: (screenWidth - 30) / 2,
      }}>
      {item.icon}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: AppColors.WHITE,
              fontWeight: '600',
              marginBottom: 5,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: AppColors.WHITE,
              fontWeight: '600',
            }}>
            <Text>{item.count}</Text>
            <Text> Task</Text>
          </Text>
        </View>
        <ArrowCircleRight2 size={32} color={AppColors.WHITE} />
      </View>
    </Pressable>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({});
