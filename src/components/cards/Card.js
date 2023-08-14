import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {AirbnbRating} from 'react-native-ratings';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Card = ({game}) => {
  const ratingPercent = parseFloat(game.steamRatingPercent);
  const ratingStars = (ratingPercent / 100) * 5;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: game.thumb}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <View style={{width: '100%', height: 33}}>
          <Text style={styles.title}>{game.title}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <AirbnbRating
            count={5}
            defaultRating={ratingStars}
            size={20}
            showRating={false}
            isDisabled={true}
            starStyle={styles.star}
          />
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.priceContainer}>
            <Text style={styles.normalPrice}>{game.normalPrice}€</Text>
            <Text style={styles.salePrice}>{game.salePrice}€</Text>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Image
              source={require('../../assets/images/like.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 360,
    height: 120,
    borderRadius: 12,
    borderColor: '#ccc',
    marginTop: 20,
    backgroundColor: '#2D3A4F',
    marginBottom: 20,
    overflow: 'visible',
  },
  imageContainer: {
    width: 120,
    height: 100,
    marginRight: 10,
    overflow: 'visible',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 14,
    position: 'relative',
    top: -20,
    paddingLeft: -20,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 5,
    lineHeight: 38.86,
    letterSpacing: 0.2,
    fontFamily: 'Manrope-ExtraLight',
    color: 'white',
    paddingHorizontal: 5,
  },
  ratingContainer: {
    alignItems: 'flex-start',
    marginTop: -10,
    paddingHorizontal: 5,
  },
  star: {
    margin: 3,
    height: 12.5,
    width: 11.89,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  normalPrice: {
    textDecorationLine: 'line-through',
    marginRight: 10,
    color: '#3D4B64',
    fontWeight: '500',
    fontFamily: 'Manrope-ExtraLight',
  },
  salePrice: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontFamily: 'Manrope-ExtraLight',
    paddingHorizontal: 1,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: '#3D4B64',
    borderTopLeftRadius: 15,
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Card;
