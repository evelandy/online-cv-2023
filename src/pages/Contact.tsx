import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import IContact from '../interfaces/page';
import '../components/styles/Contact.css';
import swal from 'sweetalert';


const ContactPage: FC<IContact & RouteComponentProps<any>> = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [job_desc, setJob_desc] = useState(null);

  const handleSubmit = (e:any): void => {
    e.preventDefault();

    const formData:any = new FormData();
    formData.append('name', name);
    formData.append('company', company);
    formData.append('email', email);
    formData.append('message', message);
    if (job_desc) {
      formData.append('job_desc', job_desc);
    }

    const url = 'https://williamgriffin.pythonanywhere.com/api/v1/upload'; 
    const requestOptions = {
      method: "POST",
      headers: { "access-control-allow-origin" : "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept" },
      body: formData
    };
    
    fetch(url, {
      method: requestOptions.method,
      headers: requestOptions.headers,
      body: requestOptions.body
    })
    .then(response => response.json())
    .then(data => {
      swal("Success!", "Submission Success! \nI will get back to you shortly.\nTo reach me faster, email me at: william.griffin@wrgcv.com", "success")
      .then(() => {
        window.location.reload();
      })
      console.log('success: => ', data)
    }).catch((err) => console.log('error: ', err))
  };

  return (
    <div className={'contact-main-container sm:flex sm:flex-col md:flex md:justify-between mt-10'}>
      <h1 className={'uppercase text-4xl text-center mb-14 contact-header'}>Contact</h1>
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
              <input onChange={(e) => setName(e.target.value)} type="text" name="Name" id="Name" value={name} className={'rounded text-black h-9'} />
            </label>
            <label className={'flex flex-col text-white text-lg'} htmlFor="LName">Company
              <input onChange={(e) => {setCompany(e.target.value)}} type="text" name="company" id="company" value={company} className={'rounded text-black h-9'} />
            </label>
            <label className={'flex flex-col text-white text-lg'} htmlFor="email">Email
              <input onChange={(e) => {setEmail(e.target.value)}} type="email" name="email" id="email" value={email} className={'rounded text-black h-9'} />
            </label>
            <label className={'flex flex-col text-white text-lg'} htmlFor="message">Message
              <textarea onChange={(e) => {setMessage(e.target.value)}} name="message" id="message" value={message} cols={30} rows={10} className={'rounded text-black'} placeholder="Leave a short message (optional)" maxLength={250}></textarea>
            </label>
            <label className={'flex flex-col text-white mt-6 mb-4'} htmlFor="document">Job Info<br/>* PDF, DOCX, TXT, DOC *
              <input onChange={(e:any) => setJob_desc(e.target.files[0])} accept={".pdf, .docx, .txt, .doc"} type="file" name="description" id="job-desc" className={'mt-2'} />
            </label>
            <span>
              <input onClick={handleSubmit} type="submit" name="submit" id="submit" className={'mt-6 rounded text-black bg-gray-100 text-md w-full h-8 uppercase cursor-pointer'} />
            </span>
          </form>
        </div>
      </span>
    </div>
  );
}

export default ContactPage;
