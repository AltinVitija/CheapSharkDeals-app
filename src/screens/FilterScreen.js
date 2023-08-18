import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../components/searchbar/SearchBar';
import Filter from '../components/filters/Filter';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchGames,
  setSearchQuery,
  setSelectedRating,
  setUpperPrice,
  setLowerPrice,
} from '../redux/store/gamesSlice';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FilterScreen = ({navigation}) => {
  const [isEmptyResult, setIsEmptyResult] = useState(false);

  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.games.searchQuery);
  const steamRatingPercent = useSelector(
    state => state.games.steamRatingPercent,
  );
  const loading = useSelector(state => state.games.loading);

  const upperPrice = useSelector(state => state.games.upperPrice);
  const lowerPrice = useSelector(state => state.games.lowerPrice);

  const handleSearchChange = query => {
    dispatch(setSearchQuery(query));
  };
  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(null));
      dispatch(setSelectedRating(0));
      dispatch(setUpperPrice(15));
      dispatch(setLowerPrice(0));

      handleSearchChange(null);
    };
  }, []);

  const handleUpperPrice = price => {
    dispatch(setUpperPrice(price));
  };

  const handleLowerPrice = price => {
    dispatch(setLowerPrice(price));
  };
  const handlePressStar = (rating, steamRatingPercent) => {
    console.log('Selected Rating:', rating);
    dispatch(setSelectedRating(rating));
  };
  const handleResetFilters = async () => {
    dispatch(setSearchQuery(null));
    dispatch(setSelectedRating(0));
    dispatch(setUpperPrice(15));
    dispatch(setLowerPrice(0));

    handleSearchChange(null);
    // dispatch(clearGamesList());

    dispatch(fetchGames());
  };

  const handleShowResult = async () => {
    const response = await dispatch(fetchGames());
    const isEmptyResult = response.payload.length === 0;
    setIsEmptyResult(isEmptyResult);
    navigation.navigate('GamesContainer', {isEmptyResult});
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
            <TouchableOpacity
              style={styles.btnReset}
              onPress={handleResetFilters}>
              {loading ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text style={styles.txtReset}>Reset</Text>
              )}
            </TouchableOpacity>
          </View>
          <View>
            <SearchBar value={searchQuery} onChangeText={handleSearchChange} />
          </View>
        </View>
        <View style={styles.middle}>
          <Filter
            valueUpperPrice={upperPrice}
            onChangeTextUpper={handleUpperPrice}
            valueLowerPrice={lowerPrice}
            onChangeTextLower={handleLowerPrice}
            onPressShowResult={handleShowResult}
            onStarRatingPress={rating =>
              handlePressStar(rating, steamRatingPercent)
            }
          />
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
    height: 300,
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
    fontFamily: 'Manrop',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21.86,
    color: '#FFFFFF',
  },
  middle: {
    flex: 1,
    width: '100%',
  },
});

export default FilterScreen;
