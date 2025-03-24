import {StyleSheet} from 'react-native';
import React from 'react';
import {Datepicker} from '@ui-kitten/components';

const CustomDatePicker = props => {
  const {onSelect} = props;
  const handleSubmit = date => {
    onSelect(date);
  };
  return <Datepicker {...props} onSelect={date => handleSubmit(date)} />;
};

export default CustomDatePicker;

const styles = StyleSheet.create({});
