import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export const TouchableComponent: FC<TouchableOpacityProps> = (props) => {
  return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};
