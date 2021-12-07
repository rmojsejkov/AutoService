import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { styles } from '@components/UI/styles';

export const Block: FC<ViewProps> = (props) => {
  return <View style={{ ...styles.content, ...(props.style as object) }}>{props.children}</View>;
};
