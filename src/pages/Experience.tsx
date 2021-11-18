import React, { FC, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { SideNav } from '../components/Nav';
import SkillSet from '../components/Skills';
import IPage from '../interfaces/page';

const ExperiencePage: FC<IPage & RouteComponentProps<any>> = () => {
  useEffect(() => {
    
  }, [])
  return (
    <div className={'flex flex-col text-center mt-40'}>
      <h2 className={'text-4xl font-bold tracking-wider'}>Past <span className={'text-red-600'}>&&</span> Present Experience</h2>
      <nav className={'w-3/4 mx-auto ml-60'}>
        <SideNav />
      </nav>
      <SkillSet />
    </div>
  );
}

export default ExperiencePage;
