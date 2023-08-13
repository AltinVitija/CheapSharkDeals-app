import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchGames} from '../redux/store/gamesSlice';
import Card from '../components/cards/Card';
import NetInfo from '@react-native-community/netinfo';

const GamesContainer = () => {
  const dispatch = useDispatch();
  const gamesList = useSelector(state => state.games.gamesList);
  const loading = useSelector(state => state.games.loading);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <View>
      {loading ? (
        <Text>loading</Text>
      ) : (
        <FlatList
          data={gamesList}
          keyExtractor={item => item.dealID}
          renderItem={({item}) => <Card game={item} />}
        />
      )}
    </View>
  );
};

export default GamesContainer;
