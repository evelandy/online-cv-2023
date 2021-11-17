import { FC } from 'react';
import '../styles/activeNav.css';

export interface ISideNavProps {}

const SideNav = () => {
  return (
    <ul className={'bg-gray-200 flex flex-col text-left sideNav'}>
      <li>Gretrix</li>
      <li>Look Far Labs</li>
      <li>PRT-Solutions</li>
      <li>Amity Social</li>
    </ul>
  );
}

export default SideNav;
