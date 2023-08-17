import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../components/searchbar/SearchBar';
import Filter from '../components/filters/Filter';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchGames,
  setSearchQuery,
  setSelectedRating,
} from '../redux/store/gamesSlice';
import {AirbnbRating} from 'react-native-ratings';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FilterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.games.searchQuery);

  const selectedRating = useSelector(state => state.games.selectedRating);

  const handleSearchChange = query => {
    dispatch(setSearchQuery(query));
  };

  const handlePressStar = rating => {
    console.log('Selected Rating:', rating);
    dispatch(setSelectedRating(rating));
  };

  const handleShowResult = () => {
    dispatch(fetchGames(selectedRating));
    navigation.navigate('GamesContainer');
  };
  return (
    <LinearGradient
      colors={['#192330', '#283245']}
      style={styles.linearGradient}>
      <StatusBar backgroundColor={'#192330'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerClose}>
            <TouchableOpacity
              onPress={() => navigation.navigate('GamesContainer')}>
              <Image source={require('../assets/images/close.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitleReset}>
            <Text style={styles.txtFilter}>Filters</Text>
            <TouchableOpacity style={styles.btnReset}>
              <Text style={styles.txtReset}>Reset</Text>
            </TouchableOpacity>
          </View>
          <View>
            <SearchBar value={searchQuery} onChangeText={handleSearchChange} />
          </View>
        </View>
        <View style={styles.middle}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingHorizontal: 10,
            }}>
            <TouchableOpacity
              style={{
                height: 31,
                width: 31,
                borderRadius: 32,
                backgroundColor: '#384151',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => handlePressStar(1)}>
              <AirbnbRating
                showRating={false}
                count={1}
                defaultRating={1}
                size={15}
                isDisabled={true}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 31,
                width: 54,
                borderRadius: 32,
                backgroundColor: '#384151',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => handlePressStar(2)}>
              <AirbnbRating
                showRating={false}
                count={2}
                defaultRating={2}
                size={15}
                isDisabled={true}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 31,
                width: 77,
                borderRadius: 32,
                backgroundColor: '#384151',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => handlePressStar(3)}>
              <AirbnbRating
                showRating={false}
                count={3}
                defaultRating={3}
                size={15}
                isDisabled={true}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 31,
                width: 100,
                borderRadius: 32,
                backgroundColor: '#384151',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => handlePressStar(4)}>
              <AirbnbRating
                showRating={false}
                count={4}
                defaultRating={4}
                size={15}
                isDisabled={true}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 70,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingHorizontal: 30,
            }}>
            <TouchableOpacity
              style={{
                height: 31,
                width: 123,
                borderRadius: 32,
                backgroundColor: '#384151',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => handlePressStar(5)}>
              <AirbnbRating
                showRating={false}
                count={5}
                defaultRating={5}
                size={15}
                isDisabled={true}
              />
            </TouchableOpacity>
          </View>
          <Filter onPressShowResult={handleShowResult} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    height: windowHeight * 0.4,
    width: windowWidth,
  },
  headerClose: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'flex-end',
    left: -10,
    marginTop: windowHeight * 0.05,
  },
  headerTitleReset: {
    height: 50,
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtFilter: {
    fontFamily: 'Manrope',
    fontWeight: '300',
    fontSize: 32,
    lineHeight: 43.71,
    color: '#EBFF01',
    paddingHorizontal: 10,
  },
  btnReset: {
    height: 34,
    width: 70,
    borderRadius: 32,
    borderWidth: 1,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    left: -10,
    borderColor: '#474E5B',
  },
  txtReset: {
    fontFamily: 'Manrope-Light',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21.86,
    color: '#FFFFFF',
  },
  middle: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
  },
});

export default FilterScreen;
