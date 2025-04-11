// app/store.ts
import { configureStore } from '@reduxjs/toolkit';

import { receiptsApi } from './receiptsApi';

export const store = configureStore({
    reducer: {
        [receiptsApi.reducerPath]: receiptsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(receiptsApi.middleware),
});
