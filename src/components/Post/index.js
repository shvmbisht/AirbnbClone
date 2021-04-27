import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

function Post(props) {
  let {bed, bedroom, oldPrice, newPrice, totalPrice, title} = props.post;
  console.log('POST', props);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />
      <Text style={styles.bedrooms}>
        {bed} bed {bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${oldPrice}</Text>
        <Text style={styles.newPrice}> ${newPrice} </Text>/ Night
      </Text>
      <Text style={styles.totalPrice}>${totalPrice} Total</Text>
    </View>
  );
}

export default Post;
