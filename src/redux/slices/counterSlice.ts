import { REDUCER_MAPPERS } from '@/constants/ReducerMappers';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 10,
};

const counterSlice = createSlice({
  name: REDUCER_MAPPERS.COUNTER,
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
