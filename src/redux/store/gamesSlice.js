import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import gameAPI from '../../services/gamesAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
  const response = await gameAPI.get('');
  return response.data;
});

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    gamesList: [],
    loading: false,
    error: null,
  },
  reducers: {},
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

export default gamesSlice.reducer;
