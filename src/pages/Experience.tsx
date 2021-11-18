import React, { FC, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { SideNav } from '../components/Nav';
import SkillSet from '../components/Skills';
import IPage from '../interfaces/page';

const ExperiencePage: FC<IPage & RouteComponentProps<any>> = () => {
  const backArrowIcon = () => {
    return (
      <svg width='30' height='30' xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 26.676 26.676">
        <path d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59 c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815   C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029   c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562   C26.18,21.891,26.141,21.891,26.105,21.891z"/>
      </svg>
    );
  }
  useEffect(() => {
    
  }, [])
  return (
    <div className={'flex flex-col text-center mt-40'}>
      <h2 className={'text-2xl font-semibold tracking-wider'}>Past <span className={'text-red-600'}>&&</span> Present Experience</h2>
      <nav className={'w-2/3 mx-auto ml-72'}>
        <SideNav />
      </nav>
      <SkillSet />
      <Link className={'w-4/12 ml-auto pl-8 mt-4'} to='/'>{backArrowIcon()}</Link>
    </div>
  );
}

export default ExperiencePage;
