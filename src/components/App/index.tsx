import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { Button, Card, Loader } from 'components';
import { useGetProductQuery } from 'service/productApi';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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

  const isDipslay = prods.length % COUNTER === 0 ? true : false;

  return (
    <Wrapper>
      {prods.map((prod: any) => (
        <Card
          key={prod.title}
          image={prod.thumbnail}
          title={prod.title}
          desc={prod.description}
          price={prod.price}
          brand={prod.brand}
          category={prod.category}
        />
      ))}
      {isDipslay ? <Button onClick={() => IncreaseCount()} /> : null}
    </Wrapper>
  );
};

export default App;