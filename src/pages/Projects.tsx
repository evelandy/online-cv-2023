import React, { FC, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import IPage from '../interfaces/page';
import '../components/styles/projects.css';

const ProjectsPage: FC<IPage & RouteComponentProps<any>> = (props) => {
  const [message, setMessage] = useState<string>('');
  useEffect(() => {
    displayMessage()
    console.log(`Loading ${props.name}`)
  }, []);

  const displayMessage = () => {
    let number = props.match.params.number;
    if(number){
      setMessage(`This Page is Under Construction`)
    } else {
      setMessage(`Content Under Construction`)
    }
  }
  return (
    <div>
      <div className={'project-card-container'}>
        <div>{message}</div>
      </div>
      <Link to='/'>Back Home</Link>
    </div>
  );
}

export default ProjectsPage;
