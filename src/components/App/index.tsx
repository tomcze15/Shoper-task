import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { Button, Card, Loader, SelectBox } from 'components';
import { useGetCategoryQuery, useGetProductQuery } from 'service/productApi';
import { IProduct } from 'common/types';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const App: FunctionComponent = (): JSX.Element => {
  const COUNTER = 5;
  const TITLE = 'Select a category';

  const [count, setCount] = useState(COUNTER);
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState<IProduct[]>([]);

  const { data: prods, isFetching: isFetchingProds } =
    useGetProductQuery(count);

  const { data: categories, isFetching: isFetchingCategories } =
    useGetCategoryQuery();

  const IncreaseCount = (): void => {
    setCount(count + COUNTER);
  };

  if (isFetchingProds && isFetchingCategories) return <Loader />;

  if (!prods) return <div>No items</div>;
  if (!categories) return <div>No categories</div>;

  const isDipslay = prods.length % COUNTER === 0 ? true : false;

  return (
    <Wrapper>
      <SelectBox
        title={TITLE}
        options={categories}
        selected={category}
        setSelected={setCategory}
      />
      {prods.map((prod: IProduct) => (
        <Card {...prod} key={prod.id} />
      ))}
      {isDipslay ? <Button onClick={() => IncreaseCount()} /> : null}
    </Wrapper>
  );
};

export default App;
