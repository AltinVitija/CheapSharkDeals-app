import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import {fetchGames} from '../redux/store/gamesSlice';
import Card from '../components/cards/Card';

const GamesContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const gamesList = useSelector(state => state.games.gamesList);
  const loading = useSelector(state => state.games.loading);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <LinearGradient
      colors={['#192330', '#283245']}
      style={styles.linearGradient}>
      <StatusBar backgroundColor={'#192330'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Text style={styles.headerText}>Game List</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('FilterScreen')}>
              <Image
                source={require('../assets/images/sliders.png')}
                style={styles.sliderImage}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.subHeaderText}>
            Find the best prices on digital games.
            {'\n'}We have just what you're looking for!
          </Text>
        </View>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={gamesList}
            keyExtractor={item => item.dealID}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('GamesDetails', {game: item})
                }>
                <Card game={item} />
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    top: Platform.select({ios: 10, android: 5}),
  },
  header: {
    height: Platform.select({ios: 210, android: 150}),
    width: '100%',
    borderColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 20,
    right: -5,
    marginBottom: 2,
    flexDirection: 'column',
    display: 'flex',
  },
  headerRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    color: '#EBFF01',
    fontWeight: '100',
    fontFamily: 'Manrope-Light',
    lineHeight: 43.71,
  },
  sliderImage: {
    height: 20,
    width: 20,
    tintColor: '#FFFFFF',
  },
  subHeaderText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '100',
    fontFamily: 'Manrope-ExtraLight',
    lineHeight: 24.59,
  },
});

export default GamesContainer;
