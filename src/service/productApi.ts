import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'constants/items';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (count: number) => `/products?_limit=${count}`,
    }),
    getProductByBrand: builder.query({
      query: (brand: string) => `/products?brand=${brand}`,
    }),
    getProductByCategory: builder.query({
      query: (category: string) => `/products?category=${category}`,
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductByBrandQuery,
  useGetProductByCategoryQuery,
} = productApi;
