import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Card = ({game, navigation}) => {
  const ratingPercent = parseFloat(game.steamRatingPercent);
  const ratingStars = (ratingPercent / 100) * 5;
  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={{height: 90, width: '100%'}}
          onPress={() => navigation.navigate('GamesDetails', {game})}>
          <Image source={{uri: game.thumb}} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{game.title}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <AirbnbRating
            count={5}
            defaultRating={ratingStars}
            size={windowWidth * 0.05}
            showRating={false}
            isDisabled={true}
            starStyle={styles.star}
          />
        </View>
        <View style={styles.priceButtonContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.normalPrice}>{game.normalPrice}€</Text>
            <Text style={styles.salePrice}>{game.salePrice}€</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.likeButtonContainer,
              liked ? styles.likedButtonContainer : null,
            ]}
            onPress={() => setLiked(!liked)}>
            {liked ? (
              <Image
                source={require('../../assets/images/like.png')}
                style={styles.likeButtonImage}
              />
            ) : (
              <Image
                source={require('../../assets/images/likeempty.png')}
                style={styles.likeButtonImage}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: windowWidth - 40,
    height: 110,
    borderRadius: 12,
    borderColor: '#ccc',
    marginTop: windowWidth * 0.05,
    backgroundColor: '#2D3A4F',
    marginBottom: windowHeight * 0.05,
    mixBlendMode: 'soft-light',
  },
  imageContainer: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.25,
    marginRight: 10,
    overflow: 'visible',
  },
  image: {
    borderRadius: 14,
    top: -20,
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  likeButtonContainer: {
    height: windowWidth * 0.125,
    width: windowWidth * 0.125,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D4B64',
    borderTopLeftRadius: 15,
    paddingHorizontal: 5,
  },

  likeButtonImage: {
    height: windowWidth * 0.05,
    width: windowWidth * 0.05,
  },
  likedButtonImage: {
    tintColor: 'red', // Customize the tint color for liked state
  },

  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  titleContainer: {
    width: '100%',
    height: windowWidth * 0.1,
  },
  title: {
    fontSize: windowWidth * 0.035,
    fontWeight: '800',
    marginBottom: 5,
    lineHeight: windowWidth * 0.1,
    letterSpacing: 0.2,
    fontFamily: 'Manrope',
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
    height: windowWidth * 0.035,
    width: windowWidth * 0.033,
  },
  priceButtonContainer: {
    height: windowWidth * 0.125,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontFamily: 'Manrope',
  },
  salePrice: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontFamily: 'Manrope',
    paddingHorizontal: 1,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    height: windowWidth * 0.125,
    width: windowWidth * 0.125,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D4B64',
    borderTopLeftRadius: 15,
    paddingHorizontal: 5,
  },
  buttonImage: {
    height: windowWidth * 0.05,
    width: windowWidth * 0.05,
  },
});

export default Card;
