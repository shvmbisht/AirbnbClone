import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

function Post(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />
      <Text style={styles.bedrooms}> 1 bed 1 bedroom</Text>
      <Text style={styles.description} numberOfLines={2}>
        My place is close to family-friendly activities. You’ll love my place
        because of the neighborhood, the light, the coziness . It is a place for
        you to relax, unwind, and take a break from the stress of everyday life
        – ideal for nature lovers and honeymooners. Spanning over two acres, the
        entire area is full of greenery and free of all pollution. My place is
        good for couples, solo adventurers, business travelers, families (with
        kids), and big groups.{' '}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$46</Text>
        <Text style={styles.newPrice}> $38 </Text>/ night
      </Text>
      <Text style={styles.totalPrice}>$230 Total</Text>
    </View>
  );
}

export default Post;
