import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { TouchableComponent } from '@components/TouchableComponent';
import { Block } from '@components/UI/Block';
import { styles } from './styles';
import { ElectricianItemProps } from './types';

export const ServiceBlockItem: FC<ElectricianItemProps> = () => {
  return (
    <Block style={styles.block}>
      <View style={styles.touchable}>
        <TouchableComponent onPress={() => {}}>
          <View>
            <View style={styles.title}>
              <Text style={styles.titleText}>title</Text>
            </View>
            <View style={styles.priceContainer}>
              <View style={styles.priceTextCont}>
                <Text style={styles.priceText}>Цена: р.</Text>
              </View>
            </View>
          </View>
        </TouchableComponent>
      </View>
    </Block>
  );
};
