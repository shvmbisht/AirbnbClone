import React, {useState} from 'react';
import {FlatList, Pressable, Text, TextInput, View} from 'react-native';
import styles from './styles';
import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

function DestinationSearchScreen(props) {
  const [searchInput, setSearchInput] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={searchInput}
        onChangeText={value => setSearchInput(value)}
      />
      <FlatList
        data={search}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('Guests')}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

export default DestinationSearchScreen;
