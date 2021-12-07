import { StyleSheet, ViewStyle } from 'react-native';
import colors from '@config/colors';

export type UIComponentStyles = {
  content: ViewStyle;
};

export const styles = StyleSheet.create<UIComponentStyles>({
  content: {
    borderRadius: 5,
    backgroundColor: colors.white,
  },
});
