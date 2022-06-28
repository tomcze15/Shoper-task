import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { Button, Card, Loader, SelectBox } from 'components';
import { useGetProductQuery } from 'service/productApi';
import { IProduct } from 'common/types';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const App: FunctionComponent = (): JSX.Element => {
  const COUNTER = 5;
  const [count, setCount] = useState(COUNTER);
  const { data: prods, isFetching: isFetchingProds } =
    useGetProductQuery(count);

  const IncreaseCount = (): void => {
    setCount(count + COUNTER);
  };

  if (isFetchingProds) return <Loader />;

  if (!prods) return <div>No items</div>;

  const isDipslay = prods.length % COUNTER === 0 ? true : false;

  return (
    <Wrapper>
      {prods.map((prod: IProduct) => (
        <Card {...prod} key={prod.id} />
      ))}
      {isDipslay ? <Button onClick={() => IncreaseCount()} /> : null}
    </Wrapper>
  );
};

export default App;
