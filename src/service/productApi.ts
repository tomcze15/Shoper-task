import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, IQueryFilter, IResponse } from 'common/types';
import { baseUrl } from 'constants/items';

const createRequest = (query: IQueryFilter): string => {
  let url = '/products';

  if (query.brand !== '') {
    url += `?brand=${query.brand}`;
  }

  if (query.category !== '') {
    if (query.brand !== '') {
      url += '&';
    } else {
      url += '?';
    }
    url += `category=${query.category}`;
  }

  if (query.brand !== '' || query.category !== '') {
    url += '&';
  } else {
    url += '?';
  }

  return (url += `_limit=${query.limit}`);
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
    getProductByFilter: builder.query<IProduct[], IQueryFilter>({
      query: (query) => createRequest(query),
      transformResponse,
    }),
    getCategories: builder.query<string[], void>({
      query: () => `/category`,
    }),
    getBrands: builder.query<string[], void>({
      query: () => `/brands`,
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductByFilterQuery,
  useGetCategoriesQuery,
  useGetBrandsQuery,
} = productApi;
