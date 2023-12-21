import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = () => {
  const colors = ['#3F6150', '#456E5D'];
  const cardWidth = [209, 215];
  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <View
          key={index}
          style={[
            styles.card,
            {
              backgroundColor: color,
              top: (index + 2) * 12,
              width: cardWidth[index],
            },
          ]}
        />
      ))}

      <View style={[styles.imgCard]}></View>
      <View style={styles.titleBox}>
        <Text>title</Text>
      </View>
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({
  container: {
    width: 225,
    height: 119,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 50,
    gap: 10,
  },
  card: {
    width: 225,
    height: 119,
    borderRadius: 20,
    position: 'absolute',

    paddingTop: 20,
    textAlign: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  imgCard: {
    width: 225,
    height: 119,
    backgroundColor: 'red',
    borderRadius: 20,
  },

  titleBox: {
    width: 48,
    height: 26,
    backgroundColor: 'grey',
    borderRadius: 100,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
});
