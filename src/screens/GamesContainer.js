import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchGames} from '../redux/store/gamesSlice';
import Card from '../components/cards/Card';
import LinearGradient from 'react-native-linear-gradient';

const GamesContainer = () => {
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
          <Text style={styles.headerText}>Game List</Text>
          <Text style={styles.subHeaderText}>
            Find the best prices on digital games.{'\n'}We have just what you're
            looking for!
          </Text>
        </View>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={gamesList}
            keyExtractor={item => item.dealID}
            renderItem={({item}) => <Card game={item} />}
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
  },
  header: {
    height: 150,
    width: '100%',
    borderColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 20,
    right: -5,
    marginBottom: 2,
    flexDirection: 'column',
    display: 'flex',
  },
  headerText: {
    fontSize: 32,
    color: '#EBFF01',
    fontWeight: '100',
    fontFamily: 'Manrope-Light ',
    lineHeight: 43.71,
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
