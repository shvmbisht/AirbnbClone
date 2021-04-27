import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

function HomeScreen(props) {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name={'search'} size={24} color={'#f15454'} />
        <Text style={styles.buttonText}> Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={[styles.title]}> Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('btn clicked')}>
          <Text style={styles.buttonText}> Explore NearBy places</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;
