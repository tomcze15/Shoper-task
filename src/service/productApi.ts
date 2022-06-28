import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, IQueryFilter, IResponse } from 'common/types';
import { baseUrl } from 'constants/items';

const createRequest = (brand: string = '', category: string = ''): string => {
  let url = '/products?';

  if (brand !== '') {
    url += `brand=${brand}`;
  }

  if (category !== '') {
    if (brand !== '') {
      url += '&';
    }
    url += `category=${category}`;
  }

  return url;
};

const transformResponse = (response: IResponse[]) => {
  return response.map(
    ({ id, title, description, price, brand, category, thumbnail }) => {
      return {
        id,
        image: thumbnail,
        title,
        description,
        price,
        brand,
        category,
      };
    }
  );
};

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProduct: builder.query<IProduct[], number>({
      query: (count: number) => `/products?_limit=${count}`,
      transformResponse,
    }),
    getProductByBrand: builder.query<IProduct[], string>({
      query: (brand: string) => `/products?brand=${brand}`,
      transformResponse,
    }),
    getProductByCategory: builder.query<IProduct[], string>({
      query: (category: string) => `/products?category=${category}`,
      transformResponse,
    }),
    getProductByFilter: builder.query<IProduct[], IQueryFilter>({
      query: ({ brand, category }) => createRequest(brand, category),
      transformResponse,
    }),
    getCategory: builder.query<string, void>({
      query: () => `/category`,
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductByBrandQuery,
  useGetProductByCategoryQuery,
  useGetProductByFilterQuery,
  useGetCategoryQuery,
} = productApi;
