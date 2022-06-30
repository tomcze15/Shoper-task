import { FunctionComponent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Button, Card, Loader, SelectBox } from 'components';
import {
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetProductByFilterQuery,
} from 'service/productApi';
import { IProduct } from 'common/types';
import { TITLE } from 'constants/items';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding-bottom: 2rem;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  padding-bottom: 2rem;
`;

const App: FunctionComponent = (): JSX.Element => {
  const COUNTER = 5;

  const [count, setCount] = useState<number>(COUNTER);
  const [brand, setBrand] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const previousLenghtOfProds = useRef<number>(0);
  const products = useRef<IProduct[]>([]);
  const brands = useRef<string[]>([]);
  const categories = useRef<string[]>([]);

  useEffect(() => {
    previousLenghtOfProds.current = 0;
    setCount(COUNTER);
  }, [category, brand]);

  const { data: categoriesData, isFetching: isFetchingCategories } =
    useGetCategoriesQuery();

  const { data: brandsData, isFetching: isFetchingBrands } =
    useGetBrandsQuery();

  const { data: prodsFiltered, isFetching: isFetchingProdsFiltered } =
    useGetProductByFilterQuery({
      brand,
      category,
      limit: count,
    });

  const IncreaseCount = (): void => {
    setCount(count + COUNTER);
  };

  const displayButtonControl = (): boolean => {
    if (
      products.current.length % COUNTER !== 0 ||
      products.current.length === 0
    ) {
      return false;
    }

    if (previousLenghtOfProds.current === products.current.length) {
      return true;
    }

    previousLenghtOfProds.current = products.current.length;
    return true;
  };

  if (isFetchingProdsFiltered || isFetchingCategories || isFetchingBrands) {
    return <Loader />;
  }

  products.current = prodsFiltered ? prodsFiltered : [];
  brands.current = brandsData ? brandsData : [];
  categories.current = categoriesData ? categoriesData : [];

  return (
    <Wrapper>
      <FilterContainer>
        <SelectBox
          title={TITLE.BRAND}
          options={brands.current}
          selected={brand}
          setSelected={setBrand}
        />
        <SelectBox
          title={TITLE.CATEGORY}
          options={categories.current}
          selected={category}
          setSelected={setCategory}
        />
      </FilterContainer>
      <ItemsContainer>
        {products.current.map((prod: IProduct) => (
          <Card {...prod} key={prod.id} />
        ))}
      </ItemsContainer>
      {displayButtonControl() ? <Button onClick={IncreaseCount} /> : null}
    </Wrapper>
  );
};

export default App;
