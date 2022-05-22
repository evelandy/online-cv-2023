import React, { FC, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import IPage from '../interfaces/page';
import '../components/styles/Contact.css';

const ContactPage: FC<IPage & RouteComponentProps<any>> = (props) => {
  const [message, setMessage] = useState<string>('');
  useEffect(() => {
    let number = props.match.params.number;
    if(number){
      setMessage(`The number is: ${number}`)
    } else {
      setMessage(`No number provided!`)
    }
    console.log(`Loading ${props.name}`)
  }, []);

  return (
    <div className={'flex flex-col space-between'}>
      <form action="" className={'flex flex-col'}>
        <label className={'flex flex-col'} htmlFor="Name">Name
          <input type="text" name="Name" id="Name" className={'border border-black rounded w-96'} required/>
        </label>
        <label className={'flex flex-col'} htmlFor="LName">Company
          <input type="text" name="company" id="company" className={'border border-black rounded w-96'} required/>
        </label>
        <label className={'flex flex-col'} htmlFor="email">Email
          <input type="email" name="email" id="email" className={'border border-black rounded w-96'} required/>
        </label>
        <label className={'flex flex-col'} htmlFor="message">Message
          <textarea name="message" id="message" cols={30} rows={10} className={'border border-black rounded w-96'}></textarea>
        </label>
        <input type="submit" name="submit" id="submit" className={'mt-6 w-96 border border-2 rounded h-8'} />
      </form>
      <span className={'border border-black rounded'}>
        <Link to='/'>Home</Link>
      </span>
    </div>
  );
}

// const ContactPage: FC<IPage & RouteComponentProps<any>> = (props) => {
//   const [message, setMessage] = useState<string>('');
//   useEffect(() => {
//     let number = props.match.params.number;
//     if(number){
//       setMessage(`The number is: ${number}`)
//     } else {
//       setMessage(`No number provided!`)
//     }
//     console.log(`Loading ${props.name}`)
//   }, [])
//   return (
//     <div>
//       This is the Contact Page! <div>{message}</div>
//       <Link to='/'>Back Home</Link>
//     </div>
//   );
// }

export default ContactPage;
