import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GREETINGS_URL = 'http://127.0.0.1:5000/greetings/random';

export const fetchGreeting = createAsyncThunk(
  'greetings/fetchGreeting',
  async () => {
    const response = await axios.get(GREETINGS_URL);
    return response.data;
  }
);

const initialState = {
  message: [],
  status: 'idle',
};

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.message = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } =
//   greetingsSlice.actions;

export default greetingsSlice.reducer;
