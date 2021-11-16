import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export interface ITopNavProps {}

const TopNav = () => {
  return (
    <>
      <nav className={'flex flex-row justify-between sticky top-0 bg-white-primary'}>
        <ul>
          <li className={'text-xl ml-6 my-4 uppercase font-semibold tracking-wider transform hover:scale-110'}><a href="#">Resume</a></li>
        </ul>
        <ul className={'flex flex-row'}>
          <li className={'text-xl mr-14 my-4 uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/">About</Link></li>
          <li className={'text-xl mr-14 my-4 uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/education">Education</Link></li>
          <li className={'text-xl mr-14 my-4 uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/experience">Experience</Link></li>
          <li className={'text-xl mr-6 my-4 uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default TopNav;
