import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type ElectricianBoxStyles = {
  block: ViewStyle;
  priceContainer: ViewStyle;
  weather: ViewStyle;
  priceTextCont: ViewStyle;
  logo: ViewStyle;
  title: TextStyle;
  titleText: TextStyle;
  touchable: ViewStyle;
  priceText: TextStyle;
};

export const styles = StyleSheet.create<ElectricianBoxStyles>({
  block: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  priceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  weather: {
    paddingVertical: 5,
  },
  priceTextCont: {
    paddingVertical: 5,
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  touchable: {
    overflow: 'hidden',
    borderRadius: 9,
  },
  priceText: {
    fontSize: 15,
  },
});
