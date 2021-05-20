import React from 'react';
import {Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

export default function SuggestionsRow({item}) {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name={'location-pin'} size={30} />
      </View>
      <Text style={styles.locationText}>{item.description}</Text>
    </View>
  );
}
