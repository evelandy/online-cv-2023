import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/hamburger.css';
import $ from 'jquery';

export interface ITopNavProps {
  toggleTheme: any;
  defaultDark: boolean;
}

const TopNav: FC<ITopNavProps> = ({toggleTheme, defaultDark}) => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  $(window).on("scroll", function() {
    if($(window).scrollTop()) {
      $('.hamNav').addClass('hamNavSticky');
    } else {
      $('.hamNav').removeClass('hamNavSticky');
    }
  });

  // commenting themeToggler out for now until a fix to toggle both upper and lower toggles can be made
  // const themeToggler = () => {
  //   return (
  //     <div className="toggle-theme-wrapper">
  //       <span>☀️</span>
  //       <label className="toggle-theme" htmlFor="checkbox">
  //         <input
  //           type="checkbox"
  //           id="checkbox"
  //           onChange={toggleTheme}
  //           defaultChecked={defaultDark}
  //         />
  //         <div className="slider round"></div>
  //       </label>
  //       <span>🌒</span>
  //     </div>
  //   );
  // }
  
  return (
    <div className={'hamNav'}>
      <div id="slide_nav" className={"lg:hidden"}>
        <p id="slide_nav_button" onClick={() => setHamburgerOpen(!hamburgerOpen)}>☰</p>
      </div>
      <span onClick={() => setHamburgerOpen(!hamburgerOpen)} className={"blah"}>
        <nav className={'flex sticky top-0 bg-white-primary z-40'}>
          <ul className={'flex flex-row hamburgerList'} id='slide_menu' style={{display: (hamburgerOpen ? 'block' : 'none')}}>
            <li className={'uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/resume">Resume</Link></li>
            <li className={'uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/">About</Link></li>
            <li className={'uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/experience">Experience</Link></li>
            <li className={'uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/projects">Projects</Link></li>
            <li className={'uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </span>
      <div className={"hidden lg:block test"}>
        <nav className={'sticky top-0 bg-white-primary'}>
          <ul className={'flex justify-between fullNav'}>
            <li className={'lg:text-xl lg:my-4 uppercase font-semibold tracking-wider transform hover:scale-110'}><Link to="/resume">Resume</Link></li>
            <ul className={"flex"}>
              {/* <span className='hidden xl:block mr-14 mt-4'>{themeToggler()}</span> this is commented out until fix for themeToggler is made */}
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
