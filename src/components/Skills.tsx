import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ApacheLogo, AWSLogo, backArrowIcon, BootStrapLogo, CSSLogo, FlaskLogo, GCPLogo, GitLogo, HTMLLogo, JavaScriptLogo, MySQLLogo, NGINXLogo, PythonLogo, ReactLogo, ReactNativeLogo, SQLiteLogo, TailwindLogo, TypeScriptLogo, JALogo, WPLogo, ShopifyLogo, AngularLogo, GALogo, GTMLogo } from '../svg';
import '../components/styles/experienceSkills.css';

export interface ISkillSet {}

  const SkillSet: FC<ISkillSet> = () => {
  return (
    <div className={'mt-24 2xl:mt-60'}>
      <h2 className={'text-4xl font-bold'}>My Tool Kit</h2>
      <ul className={'grid grid-cols-3 w-full mx-auto mt-12 skills lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8'}>
        <li>{JavaScriptLogo()}</li>
        <li>{HTMLLogo()}</li>
        <li>{CSSLogo()}</li>
        <li>{ReactLogo()}</li>
        <li>{AngularLogo()}</li>
        <li>{TypeScriptLogo()}</li>
        <li>{PythonLogo()}</li>
        <li>{FlaskLogo()}</li>
        <li>{GitLogo()}</li>
        <li>{ReactNativeLogo()}</li>
        <li>{JALogo()}</li>
        <li style={{backgroundColor: 'white', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px'}}>{SQLiteLogo()}</li>
        <li style={{backgroundColor: 'white', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px'}}>{MySQLLogo()}</li>
        <li style={{backgroundColor: 'white', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px'}}>{AWSLogo()}</li>
        <li>{GCPLogo()}</li>
        <li>{NGINXLogo()}</li>
        <li>{ApacheLogo()}</li>
        <li>{WPLogo()}</li>
        <li>{ShopifyLogo()}</li>
        <li>{TailwindLogo()}</li>
        <li>{BootStrapLogo()}</li>
        <li>{GALogo()}</li>
        <li>{GTMLogo()}</li>
        {/* <li>REST API</li> */}
        {/* <li>Google Tag Manager</li> */}
        <li className={'mt-3'} style={{color: '#dc2626', fontWeight: '900', letterSpacing: '.5px', fontSize: '12px', textTransform: 'uppercase'}}><Link className={''} to='/'>{backArrowIcon()}</Link>Back</li>
      </ul>
    </div>
  );
}

export default SkillSet;
