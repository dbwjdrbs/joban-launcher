import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isMaximized: false,
};

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    setWindowState(state, action: PayloadAction<boolean>) {
      state.isMaximized = action.payload;
    },
  },
});

export const { setWindowState } = windowSlice.actions;
export default windowSlice.reducer;
