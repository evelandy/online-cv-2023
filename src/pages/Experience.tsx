import React, { FC, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { SideNav } from '../components/Nav';
import IPage from '../interfaces/page';

const ExperiencePage: FC<IPage & RouteComponentProps<any>> = () => {
  useEffect(() => {
    
  }, [])
  return (
    <div className={'flex flex-col text-center mt-24'}>
      <h2 className={'text-2xl font-semibold tracking-wider'}>Past <span className={'text-red-600'}>&&</span> Present Experiences</h2>
      <nav className={'w-2/6 mx-auto'}>
        <SideNav />
      </nav>
      {/* <Link to='/'>Back Home</Link> */}
    </div>
  );
}

export default ExperiencePage;
