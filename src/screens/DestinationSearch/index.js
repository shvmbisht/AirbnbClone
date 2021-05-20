import React, {useState} from 'react';
import {FlatList, Pressable, Text, TextInput, View} from 'react-native';
import styles from './styles';
import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionsRow from './SuggestionsRow';
function DestinationSearchScreen(props) {
  const [searchInput, setSearchInput] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <View style={{height: 500}}> */}
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyCAvilsroj1OhiBSFc4GtHMIueEketvwYk',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionsRow item={item} />}
      />
      {/* </View> */}
    </View>
  );
}

export default DestinationSearchScreen;
