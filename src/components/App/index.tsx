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

  if (isFetchingProdsFiltered || isFetchingCategories || isFetchingBrands) {
    return <Loader />;
  }

  const products = prodsFiltered ? prodsFiltered : [];

  const displayButtonControl = (): boolean => {
    if (products.length % COUNTER !== 0 || products.length === 0) {
      return false;
    }

    if (previousLenghtOfProds.current === products.length) {
      return false;
    }

    previousLenghtOfProds.current = products.length;
    return true;
  };

  return (
    <Wrapper>
      <FilterContainer>
        <SelectBox
          title={TITLE.BRAND}
          options={brandsData || []}
          selected={brand}
          setSelected={setBrand}
        />
        <SelectBox
          title={TITLE.CATEGORY}
          options={categoriesData || []}
          selected={category}
          setSelected={setCategory}
        />
      </FilterContainer>
      <ItemsContainer>
        {products.map((prod: IProduct) => (
          <Card {...prod} key={prod.id} />
        ))}
      </ItemsContainer>
      {displayButtonControl() ? <Button onClick={IncreaseCount} /> : null}
    </Wrapper>
  );
};

export default App;
