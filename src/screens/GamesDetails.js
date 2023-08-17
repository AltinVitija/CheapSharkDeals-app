import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {AirbnbRating} from 'react-native-ratings';
import CardStore from '../components/cards/CardStore';
import {fetchStore} from '../redux/store/storeSlice';

const formatDate = timestamp => new Date(timestamp * 1000).toLocaleDateString();

const GamesDetails = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {game} = route.params;
  const storeList = useSelector(state => state.stores.storeList);

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(fetchStore());
  }, [dispatch]);

  const ratingPercent = parseFloat(game.steamRatingPercent);
  const ratingStars = (ratingPercent / 100) * 5;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#192330', '#283245']}
        style={[styles.linearGradient, {zIndex: 1}]}>
        <StatusBar translucent backgroundColor="transparent" />
        {/* Header */}
        <View style={styles.header}>
          <Image source={{uri: game.thumb}} style={styles.backgroundImage} />
          <Image source={{uri: game.thumb}} style={styles.profileImage} />
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Image
              source={require('../assets/images/arrow-left.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
        {/* Middle */}
        <View style={styles.middle}>
          <View style={styles.infoContainer}>
            <Text style={styles.gameTitle}>{game.title}</Text>
            <Text style={styles.steamRating}>{game.steamRatingText}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.salePrice}>{game.salePrice}€</Text>
            <Text style={styles.releaseDate}>
              on {formatDate(game.releaseDate)}
            </Text>
          </View>
          <View style={styles.storeListContainer}>
            <View
              style={{
                height: 20,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '800',
                  fontSize: 16,
                  lineHeight: 21.86,
                  letterSpacing: 2,
                  color: '#FFFFFF',
                }}>
                Where to buy it
              </Text>
              <Text
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '400',
                  fontSize: 13,
                  lineHeight: 16,
                  letterSpacing: 2,
                  color: '#FFFFFF',
                }}>
                4 STORE{' '}
              </Text>
            </View>
            <FlatList
              horizontal
              data={storeList.slice(0, 4)}
              keyExtractor={item => item.storeID}
              renderItem={({item}) => <CardStore stores={item} game={game} />}
            />
          </View>
        </View>
      </LinearGradient>
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.ratingContainer}>
          <AirbnbRating
            count={5}
            defaultRating={ratingStars}
            size={20}
            showRating={false}
            isDisabled={true}
            starStyle={styles.star}
            selectedColor="#192330"
            selected={false}
          />
        </View>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>{game.steamRatingPercent}/100:</Text>
          <Text style={styles.footerText}>{game.steamRatingText}</Text>
        </View>
        <TouchableOpacity onPress={handleGoBack} style={styles.arrowButton}>
          <Image source={require('../assets/images/arrow-right.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    height: 610,
    width: '100%',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: 'hidden',
  },
  storeListContainer: {
    height: 130,
    width: '100%',
  },
  storeListTitle: {
    fontFamily: 'Manrope',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 21.86,
    letterSpacing: 2,
    color: '#FFFFFF',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  header: {
    height: 280,
    width: '100%',
    position: 'relative',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 210,
    resizeMode: 'cover',
  },
  profileImage: {
    width: 110,
    height: 148,
    borderRadius: 12,
    position: 'absolute',
    top: 120,
    left: 15,
  },
  backButton: {
    height: 30,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 53,
  },
  arrowIcon: {
    height: 24,
    width: 24,
  },
  middle: {
    height: 360,
    width: '100%',
    overflow: 'visible',
  },
  infoContainer: {
    height: 100,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  gameTitle: {
    fontFamily: 'Manrope',
    fontWeight: '300',
    fontSize: 32,
    lineHeight: 32,
    color: '#EBFF01',
  },
  steamRating: {
    fontWeight: '300',
    fontSize: 18,
    lineHeight: 24.59,
    color: '#FFFFFF',
  },
  priceContainer: {
    height: 100,
    width: '100%',
    paddingHorizontal: 20,
  },
  salePrice: {
    fontFamily: 'Manrope',
    fontWeight: '300',
    fontSize: 32,
    lineHeight: 43.7,
    color: '#FFFFFF',
  },
  releaseDate: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: 2,
    color: '#80858B',
    paddingHorizontal: 5,
  },
  footer: {
    height: 100,
    width: '100%',
    backgroundColor: '#EBFF01',
    position: 'absolute',
    bottom: 0,
    zIndex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 20,
  },
  ratingContainer: {
    alignItems: 'center',
    top: 20,
  },
  arrowButton: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
  },
});

export default GamesDetails;
