import React, { FC, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import IContact from '../interfaces/page';
import '../components/styles/Contact.css';
import { useForm } from 'react-hook-form';

const ContactPage: FC<IContact & RouteComponentProps<any>> = () => {
  // const { register } = useForm<IContact>();
  // const [submit, setSubmit] = useState<IContact | undefined>(undefined);

  useEffect(() => {
    
  }, []);

  return (
    <div className={'sm:flex sm:flex-col md:flex md:justify-between mt-10'}>
      <h1 className={'uppercase text-4xl text-center mb-14'}>Contact</h1>
      <span className={'lg:flex lg:flex-row space-between'}>
        <iframe
          width={"100%"}
          height={"100%"}
          title={"map"}
          className={"contact-map h-96 mb-14 rounded w-1/2"}
          src={"https://www.google.com/maps/embed/v1/place?q=10950+Tanner+Park+Ct.+&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}
        />
        <div className={'contact-container flex flex-col space-between mb-24'}>
          <form className={'contact-form flex flex-col md:ml-auto md:mr-auto sm:w-full'}>
            <label className={'flex flex-col text-white text-lg'} htmlFor="Name">Name
              <input type="text" name="Name" id="Name" className={'rounded text-black h-9'} required/>
            </label>
            <label className={'flex flex-col text-white text-lg'} htmlFor="LName">Company
              <input type="text" name="company" id="company" className={'rounded text-black h-9'} required/>
            </label>
            <label className={'flex flex-col text-white text-lg'} htmlFor="email">Email
              <input type="email" name="email" id="email" className={'rounded text-black h-9'} required/>
            </label>
            <label className={'flex flex-col text-white text-lg'} htmlFor="message">Message
              <textarea name="message" id="message" cols={30} rows={10} className={'rounded text-black'} placeholder="Leave a short message (optional)" maxLength={250}></textarea>
            </label>
            <label className={'flex flex-col text-white mt-6 mb-4'} htmlFor="document">Job Info<br/>*PDF, DOCX, TXT, DOC
              <input type="file" name="description" id="job-desc" className={'mt-2'} required/>
            </label>
            <span>
              <input type="submit" name="submit" id="submit" className={'mt-6 rounded text-black bg-gray-100 text-md w-full h-8 uppercase cursor-pointer'} />
              {/* <Link className={'border border-black rounded bg-gray-100 h-8 text-center text-black text-lg'} to='/'>Home</Link> */}
            </span>
          </form>
        </div>
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
