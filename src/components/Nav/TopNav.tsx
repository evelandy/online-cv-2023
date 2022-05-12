import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/hamburger.css';
import $ from 'jquery';

export interface ITopNavProps {}

const TopNav: FC<ITopNavProps> = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  $(window).on("scroll", function() {
    if($(window).scrollTop()) {
      $('.hamNav').addClass('hamNavSticky');
    } else {
      $('.hamNav').removeClass('hamNavSticky')
    }
  })
  
  return (
    <div className={'hamNav'}>
      <div id="slide_nav" className={"lg:hidden"}>
        <p id="slide_nav_button" onClick={() => setHamburgerOpen(!hamburgerOpen)}>☰</p>
      </div>
      <span onClick={() => setHamburgerOpen(!hamburgerOpen)} className={"blah"}>
        <nav className={'flex sticky top-0 bg-white-primary z-40'}>
          <ul className={'flex flex-row hamburgerList'} id='slide_menu' style={{display: (hamburgerOpen ? 'block' : 'none')}}>
            <li className={'uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/">Resume</Link></li>
            <li className={'uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/">About</Link></li>
            <li className={'uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/experience">Experience</Link></li>
            <li className={'uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/projects">Projects</Link></li>
            <li className={'uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </span>
      <div className={"hidden lg:block"}>
        <nav className={'sticky top-0 bg-white-primary'}>
          <ul className={'flex justify-between'}>
            <li className={'lg:text-xl lg:my-4 uppercase font-semibold tracking-wider transform hover:scale-110'}><a href="#">Resume</a></li>
            <ul className={"flex"}>
              <li className={'lg:text-xl lg:mr-10 xl:mr-14 lg:my-4 uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/">About</Link></li>
              <li className={'lg:text-xl lg:mr-10 xl:mr-14 lg:my-4 uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/experience">Experience</Link></li>
              <li className={'lg:text-xl lg:mr-10 xl:mr-14 lg:my-4 uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/projects">Projects</Link></li>
              <li className={'lg:text-xl lg:my-4 uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/contact">Contact</Link></li>
            </ul>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default TopNav;
