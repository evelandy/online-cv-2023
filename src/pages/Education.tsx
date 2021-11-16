import React, { FC, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import IPage from '../interfaces/page';

const EducationPage: FC<IPage & RouteComponentProps<any>> = (props) => {
  const [message, setMessage] = useState<string>('');
  useEffect(() => {
    let number = props.match.params.number;
    if(number){
      setMessage(`The number is: ${number}`)
    } else {
      setMessage(`No number provided!`)
    }
    console.log(`Loading ${props.name}`)
  }, [])
  return (
    <div>
      This is the Education Page! <div>{message}</div>
      <Link to='/'>Back Home</Link>
    </div>
  );
}

export default EducationPage;
