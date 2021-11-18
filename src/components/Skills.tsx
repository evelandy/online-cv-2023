import { FC } from 'react';
import { CSSLogo, FlaskLogo, JavaScriptLogo, PythonLogo, TypeScriptLogo } from '../svg';

export interface ISkillSet {}

const SkillSet: FC<ISkillSet> = () => {
  return (
    <div className={'mt-28'}>
      <h2 className={'text-2xl font-bold'}>My Tool Kit</h2>
      <ul className={'flex flex-row flex-wrap w-1/2 mx-auto'}>
        <li>{PythonLogo()}</li>
        <li>{FlaskLogo()}</li>
        <li>{JavaScriptLogo()}</li>
        <li>HTML</li>
        <li>{CSSLogo()}</li>
        <li>React JS</li>
        <li>{TypeScriptLogo()}</li>
        <li>React Native</li>
        <li>MySQL</li>
        <li>SQLite</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>REST API</li>
        <li>AWS</li>
        <li>GCP</li>
        <li>Apache</li>
        <li>NGINX</li>
        <li>Git</li>
        <li>Google Analytics</li>
        <li>Google Tag Manager</li>
      </ul>
    </div>
  );
}

export default SkillSet;
