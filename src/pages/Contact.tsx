import React, { FC, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import IContact from '../interfaces/page';
import '../components/styles/Contact.css';


const ContactPage: FC<IContact & RouteComponentProps<any>> = () => {
  // const { register } = useForm<IContact>();
  // const [submit, setSubmit] = useState<IContact | undefined>(undefined);
  const [Name, setName] = useState<IContact>();
  const [Company, setCompany] = useState<IContact>();
  const [Email, setEmail] = useState<IContact>();
  const [Message, setMessage] = useState<IContact>();
  const [Job_desc, setJob_desc] = useState<IContact>();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const contactObj = {"name": Name, "company": Company, "email": Email, "message": Message, "job_desc": Job_desc};
    const url = 'https://williamgriffin.pythonanywhere.com/api/v1/contact';
    const requestOptions = {
      method: "POST",
      headers: { "access-control-allow-origin" : "*", "Content-Type": "application/json" },
      body: JSON.stringify(contactObj.job_desc)
    };
    fetch ('https://williamgriffin.pythonanywhere.com/api/v1/contact', {
      method: "POST",
      headers: { 
        "Access-Control-Allow-Origin" : "*", 
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      },
      body: JSON.stringify(contactObj)
    })
    .then(response => response.json())
    .then(res => console.log(res));
  }

  // const handleSubmit = (e:any) => {
  //   e.preventDefault();
  //   fetch('https://williamgriffin.pythonanywhere.com/api/v1/contact', {
  //     method: 'GET',
  //   })
  //   .then(response => response.json())
  //   .then(res => alert(res));
  // }

  useEffect(() => {
    
  }, []);

  return (
    <div className={'contact-main-container sm:flex sm:flex-col md:flex md:justify-between mt-10'}>
      <h1 className={'uppercase text-4xl text-center mb-14'}>Contact</h1>
      <span className={'contact-flex-container lg:flex lg:flex-row'}>
        <iframe
          width={"100%"}
          height={"100%"}
          title={"map"}
          className={"contact-map mb-14 rounded"}
          src={"https://www.google.com/maps/embed/v1/place?q=10950+Tanner+Park+Ct.+&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}
        />
        <div className={'contact-container flex flex-col space-between mb-24'}>
          <form className={'contact-form flex flex-col md:ml-auto md:mr-auto sm:w-full'} encType="multipart/form-data">
            <label className={'flex flex-col text-white text-lg'} htmlFor="Name">Name
              <input onChange={(e:any) => {setName(e.target.value)}} type="text" name="Name" id="Name" className={'rounded text-black h-9'} required/>
            </label>
            <label className={'flex flex-col text-white text-lg'} htmlFor="LName">Company
              <input onChange={(e:any) => {setCompany(e.target.value)}} type="text" name="company" id="company" className={'rounded text-black h-9'} required/>
            </label>
            <label className={'flex flex-col text-white text-lg'} htmlFor="email">Email
              <input onChange={(e:any) => {setEmail(e.target.value)}} type="email" name="email" id="email" className={'rounded text-black h-9'} required/>
            </label>
            <label className={'flex flex-col text-white text-lg'} htmlFor="message">Message
              <textarea onChange={(e:any) => {setMessage(e.target.value)}} name="message" id="message" cols={30} rows={10} className={'rounded text-black'} placeholder="Leave a short message (optional)" maxLength={250}></textarea>
            </label>
            <label className={'flex flex-col text-white mt-6 mb-4'} htmlFor="document">Job Info<br/>*PDF, DOCX, TXT, DOC
              <input onChange={(e:any) => {setJob_desc(e.target.value)}} type="file" name="description" id="job-desc" className={'mt-2'} required/>
            </label>
            <span>
              <input onClick={handleSubmit} type="submit" name="submit" id="submit" className={'mt-6 rounded text-black bg-gray-100 text-md w-full h-8 uppercase cursor-pointer'} />
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
