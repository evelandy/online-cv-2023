import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ApacheLogo, AWSLogo, backArrowIcon, BootStrapLogo, CSSLogo, FlaskLogo, GCPLogo, GitLogo, HTMLLogo, JavaScriptLogo, MySQLLogo, NGINXLogo, PythonLogo, ReactLogo, ReactNativeLogo, SQLiteLogo, TailwindLogo, TypeScriptLogo } from '../svg';
import '../components/styles/experienceSkills.css';

export interface ISkillSet {}

const SkillSet: FC<ISkillSet> = () => {
  return (
    <div className={'mt-40'}>
      <h2 className={'text-4xl font-bold'}>My Tool Kit</h2>
      <ul className={'grid grid-cols-6 w-full mx-auto mt-16 skills'}>
        <li>{PythonLogo()}</li>
        <li>{FlaskLogo()}</li>
        <li>{JavaScriptLogo()}</li>
        <li>{HTMLLogo()}</li>
        <li>{CSSLogo()}</li>
        <li>{ReactLogo()}</li>
        <li>{TypeScriptLogo()}</li>
        <li>{ReactNativeLogo()}</li>
        <li>{MySQLLogo()}</li>
        <li>{SQLiteLogo()}</li>
        <li>{BootStrapLogo()}</li>
        <li>{TailwindLogo()}</li>
        {/* <li>REST API</li> */}
        <li>{AWSLogo()}</li>
        <li>{GCPLogo()}</li>
        <li>{ApacheLogo()}</li>
        <li>{NGINXLogo()}</li>
        <li>{GitLogo()}</li>
        {/* <li>{GALogo()}</li>
        <li>Google Tag Manager</li> */}
        <li className={'mt-4'}><Link className={''} to='/'>{backArrowIcon()}</Link></li>
      </ul>
    </div>
  );
}

export default SkillSet;
