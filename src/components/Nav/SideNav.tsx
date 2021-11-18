import { FC, useState, useEffect } from 'react';
import experienceList from '../../data/experienceList';
import { NavLink } from 'react-router-dom';
import '../styles/activeNav.css';
import $ from 'jquery';


export interface ISideNavProps {}

const SideNav = () => {
  const [active, setActive] = useState<boolean>(true);
  useEffect(() => {
    handleActive()
  }, [])
  const handleActive = () => {
    $(document).on('click', 'ul li', function() {
      $(this).addClass('active').siblings().removeClass('active')
    })
  }
  return (
    <ul className={'flex flex-col text-left ml-12 sideNav'}>
      <li className={'active tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold w-1/3'}>Gretrix</li>
      <li className={'tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold w-1/3'}>Look Far Labs</li>
      <li className={'tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold w-1/3'}>GrDev</li>
      <li className={'tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold w-1/3'}>PRT-Solutions</li>
      <li className={'tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold w-1/3'}>Amity Social</li>
    </ul>
  );
}

export default SideNav;
