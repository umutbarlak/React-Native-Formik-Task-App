import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {screenHeight, screenWidth} from '../../utils/screen';
import AppColors from '../../theme/colors';
import {Add} from 'iconsax-react-native';

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size={44} color={AppColors.WHITE} />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
    borderRadius: 100,
    backgroundColor: AppColors.PENDING,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: screenHeight * 0.04,
    right: screenWidth * 0.04,
  },
});
