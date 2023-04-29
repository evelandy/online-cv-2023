import React, { FC, useState, useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { SideNav } from '../components/Nav';
import SkillSet from '../components/Skills';
import IPage from '../interfaces/page';
import '../components/styles/activeNav.css';

const ExperiencePage: FC<IPage & RouteComponentProps<string | undefined>> = ({name, globalTheme}) => {
  const [company, setCompany] = useState<string>();

  const showCompany = useCallback((comp:string | undefined) => {
    setCompany(comp)
  }, [])

  return (
    <div className={'flex flex-col text-center mt-28'}>
      <h2 className={'text-3xl font-bold tracking-wider lg:text-4xl 2xl:mt-44'}>Past <span className={'text-red-600'}>&&</span> Present Experience</h2>
      <nav className={'tablet-exp'}>
        <SideNav selectedCompany={showCompany} />
      </nav>
      <SkillSet company={company} />
    </div>
  );
}

export default ExperiencePage;
