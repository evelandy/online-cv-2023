import { FC, useState, useEffect } from 'react';
import experienceList from '../../data/experienceList';
import { NavLink } from 'react-router-dom';
import '../styles/activeNav.css';
import $ from 'jquery';

export interface ISideNavProps {}

const SideNav = () => {
  const [active, setActive] = useState<boolean>(true);
  const [selected, setSelected] = useState<string>('Gretrix');
  useEffect(() => {
    handleActive()
  }, [])
  const handleActive = () => {
    $(document).on('click', 'ul li', function() {
      $(this).addClass('active').siblings().removeClass('active')
    })
  }
  return (
    <div className={'flex flex-row mt-24'}>
      <ul className={'flex flex-col text-left sideNav text-lg'}>
      <li onClick={(e:any) => setSelected(e.target.innerText)} className={'active tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold'}>Gretrix</li>
      <li onClick={(e:any) => setSelected(e.target.innerText)} className={'tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold'}>Look Far Labs</li>
      <li onClick={(e:any) => setSelected(e.target.innerText)} className={'tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold'}>GrDev</li>
      <li onClick={(e:any) => setSelected(e.target.innerText)} className={'tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold'}>PRT-Solutions</li>
      <li onClick={(e:any) => setSelected(e.target.innerText)} className={'tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold'}>Amity Social</li>
    </ul>
    <ul className={`ml-8 ${selected === 'Gretrix' ? 'inline' : 'hidden'}`}>
      <li><h3 className={'font-bold text-xl mr-4'}>Full Stack Web Developer <span className={'text-red-alert'}>@ Gretrix</span></h3></li>
      <li><p className={'text-sm text-left my-2 font-medium tracking-wider ml-3'}>June 2021 - Current</p></li>
      <ul className={'text-left ml-5 tracking-wider text-md description'}>
        <li className={''}>This is where the description will go</li>
        <li><p>This is where the description will go</p></li>
        <li><p>This is where the description will go</p></li>
      </ul>
    </ul>
    <ul className={`ml-8 ${selected === 'Look Far Labs' ? 'inline' : 'hidden'}`}>
      <li><h3 className={'font-bold text-xl mr-4 text-xl'}>React Developer <span className={'text-red-alert'}>@ Look Far Labs</span></h3></li>
      <li><p className={'text-sm text-left my-2 font-medium tracking-wider ml-3'}>Sept. 2021 - Current</p></li>
      <ul className={'text-left ml-5 tracking-wider text-md description'}>
        <li className={''}>This is where the description will go</li>
        <li><p>This is where the description will go</p></li>
        <li><p>This is where the description will go</p></li>
      </ul>
    </ul>
    <ul className={`ml-8 ${selected === 'GrDev' ? 'inline' : 'hidden'}`}>
      <li><h3 className={'font-bold text-xl mr-4 text-xl'}>Full Stack Software Engineer <span className={'text-red-alert'}>@ GrDev</span></h3></li>
      <li><p className={'text-sm text-left my-2 font-medium tracking-wider ml-2'}>March. 2018 - Current</p></li>
      <ul className={'text-left ml-5 tracking-wider text-md description'}>
        <li className={''}>This is where the description will go</li>
        <li><p>This is where the description will go</p></li>
        <li><p>This is where the description will go</p></li>
      </ul>
    </ul>
    <ul className={`ml-8 ${selected === 'PRT-Solutions' ? 'inline' : 'hidden'}`}>
      <li><h3 className={'font-bold text-xl mr-4 text-xl'}>Full Stack Software Engineer <span className={'text-red-alert'}>@ PRT-Solutions</span></h3></li>
      <li><p className={'text-sm text-left my-2 font-medium tracking-wider ml-1'}>Sept. 2020 - June 2021</p></li>
      <ul className={'text-left ml-5 tracking-wider text-md description'}>
        <li className={''}>This is where the description will go</li>
        <li><p>This is where the description will go</p></li>
        <li><p>This is where the description will go</p></li>
      </ul>
    </ul>
    <ul className={`ml-8 ${selected === 'Amity Social' ? 'inline' : 'hidden'}`}>
      <li><h3 className={'font-bold text-xl mr-4 text-xl'}>Full Stack Software Engineer <span className={'text-red-alert'}>@ Amity Social</span></h3></li>
      <li><p className={'text-sm text-left my-2 font-medium tracking-wider ml-1'}>May 2019 - Sept. 2020</p></li>
      <ul className={'text-left ml-5 tracking-wider text-md description'}>
        <li className={''}>This is where the description will go</li>
        <li><p>This is where the description will go</p></li>
        <li><p>This is where the description will go</p></li>
      </ul>
    </ul>
    </div>
  );
}

export default SideNav;
