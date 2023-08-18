import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import gameAPI from '../../services/gamesAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async (_, {getState}) => {
    const {searchQuery, steamRatingPercent, upperPrice, lowerPrice} =
      getState().games;

    try {
      const response = await gameAPI.get(
        `1.0/deals?title=${searchQuery}&storeID=1&upperPrice=${upperPrice}&lowerPrice=${lowerPrice}&steamRatingPercent=${steamRatingPercent}`,
      );

      return response.data.map(game => ({
        ...game,
        salePrice: game.salePrice,
        normalPrice: game.normalPrice,
      }));
    } catch (error) {
      throw error;
    }
  },
);

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    gamesList: [],
    loading: false,
    error: null,
    searchQuery: '',
    steamRatingPercent: 0,
    upperPrice: 15,
    lowerPrice: 0,
  },
  reducers: {
    setSearchQuery: (state, {payload}) => {
      state.searchQuery = payload;
    },
    setUpperPrice: (state, {payload}) => {
      state.upperPrice = payload;
    },
    setLowerPrice: (state, {payload}) => {
      state.lowerPrice = payload;
    },
    setSelectedRating: (state, {payload}) => {
      state.steamRatingPercent = payload;
    },
    clearGamesList: state => {
      state.gamesList = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGames.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGames.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.gamesList = payload;
        AsyncStorage.setItem('cachedGamesList', JSON.stringify(payload));
      })
      .addCase(fetchGames.rejected, (state, {error}) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export const {
  setSearchQuery,
  setSelectedRating,
  setUpperPrice,
  setLowerPrice,
  clearGamesList,
} = gamesSlice.actions;

export default gamesSlice.reducer;
