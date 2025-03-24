import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppColors from '../../theme/colors';

const CustomButton = props => {
  const {title, bg} = props;
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: bg}]}
      {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: AppColors.WHITE,
    textAlign: 'center',
  },
});
