import { configureStore } from '@reduxjs/toolkit';

import { productApi } from 'service/productApi';

export default configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
});
