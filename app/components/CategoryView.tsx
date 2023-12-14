import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Category = () => {
  return (
    <View style={styles.imgContainer}>
      <View style={styles.imgBox}>
        <Image
          source={{
            uri: 'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
          }}
          style={styles.img}
        />
      </View>
      <Text>Category</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  imgContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 60,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  imgBox: {
    width: 250,
    height: 250,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
