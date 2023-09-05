import { configureStore, Middleware } from '@reduxjs/toolkit';

import counterReducer from './slices/counterSlice';
import { REDUCER_MAPPERS } from '@/constants/ReducerMappers';
import CounterService from './middlewares/CounterService';

const staticReducers = {
  [REDUCER_MAPPERS.COUNTER]: counterReducer,
};

const middlewares: Middleware[] = [CounterService.middleware];

export const defaultInitState = {};

export const store = configureStore({
  reducer: staticReducers,
  preloadedState: defaultInitState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }).concat<Middleware[]>(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
