import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import gameAPI from '../../services/gamesAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchStore = createAsyncThunk('stores/fetchStore', async () => {
  const response = await gameAPI.get('/1.0/stores');
  return response.data;
});

const storeSlice = createSlice({
  name: 'stores',
  initialState: {
    storeList: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchStore.pending, state => {
        state.loading = true;
      })
      .addCase(fetchStore.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.storeList = action.payload;
        AsyncStorage.setItem('cachedStoreList', JSON.stringify(action.payload));
      })
      .addCase(fetchStore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default storeSlice.reducer;
