import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from './features/colorsSlice';
import { api } from './features/api';

const store = configureStore({
  reducer: {
    colors: colorsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
