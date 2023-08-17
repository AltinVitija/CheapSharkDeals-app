import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import gameAPI from '../../services/gamesAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async (_, {getState}) => {
    const state = getState();
    const searchQuery = state.games.searchQuery;
    const selectedRating = state.games.selectedRating;

    const response = await gameAPI.get(
      `1.0/deals?title=${searchQuery}&storeID=1&upperPrice=15&rating=${selectedRating}`,
    );
    const gamesWithPrices = response.data.map(game => ({
      ...game,
      salePrice: game.salePrice,
      normalPrice: game.normalPrice,
    }));

    return gamesWithPrices;
  },
);

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    gamesList: [],
    loading: false,
    error: null,
    searchQuery: '',
    selectedRating: 0,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.searchQuery = action.payload;
    },
    setMinPrice: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedRating: (state, action) => {
      state.selectedRating = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchGames.pending, state => {
        state.loading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false;
        state.gamesList = action.payload;

        AsyncStorage.setItem('cachedGamesList', JSON.stringify(action.payload));
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {setSearchQuery, setSelectedRating} = gamesSlice.actions;

export default gamesSlice.reducer;
