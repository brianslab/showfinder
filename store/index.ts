import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { mediaApi } from './apis/mediaApi';

export const store = configureStore({
  reducer: {
    [mediaApi.reducerPath]: mediaApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(mediaApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useGetMediaByTitleQuery } from './apis/mediaApi';
