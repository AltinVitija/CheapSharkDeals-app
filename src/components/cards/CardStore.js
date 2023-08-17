import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const CardStore = ({stores, game}) => {
  const baseImageUrl = 'https://www.cheapshark.com';

  return (
    <View style={styles.card}>
      <Image
        source={{uri: baseImageUrl + stores.images.logo}}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{stores.storeName}</Text>
        <Text style={styles.salePrice}>{game.salePrice}€</Text>
        <Text style={styles.normalPrice}> {game.normalPrice}€</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 72,
    borderRadius: 16,
    backgroundColor: '#FFFFFF1A',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    margin: 10,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  normalPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#80858B',
    textDecorationLine: 'line-through',
  },
  salePrice: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 2,
    color: '#EBFF01',
  },
});

export default CardStore;
