import React, { FC, useEffect } from 'react';
import IPage from '../interfaces/page';

const HomePage: FC<IPage> = props => {
  useEffect(() => {
    console.log(`Loading ${props.name}`)
  }, [])
  return (
    <p>This is the Home Page!</p>
  );
}

export default HomePage;
