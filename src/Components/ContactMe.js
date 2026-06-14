import React from 'react';
import { TextField, Button } from '@mui/material';
import '../Css/ContactMe.css';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { ContactMeService } from '../Services/api/ContactMeService';

export default function ContactMe({Ref}) {
   const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      text: ''
   });

   const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if(formData.text == ''
         || (
            formData.name == '' 
            && (formData.email == '' || !validateEmail(formData.email)) 
         )
      ) return;


      const response = await ContactMeService.SendMessage(formData);
      if (response.error) {
         console.error('Error sending message:', response.error);
         if(response.error = 'Too many requests. Please try again later.')
            alert(response.error);
         else
            alert('Failed to send message. Please try again.');
      } else {
         console.log('Message sent successfully:', response);
         alert('Thank you! Your message has been sent.');
         setFormData({ name: '', email: '', text: '' });
      }
   };

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };
   
   return (
      <div className="ContactMe" ref={Ref}>
         <div className="ContactMe-info">
            <h1 className="ContactMe-title">Contact Me! </h1>
            <p className="ContactMe-text">
               I'd love to hear from you. Please fill out the form below and I'll get
               back to you as soon as possible.
            </p>
            <div className='ContactMe-icon-container'>
               <LinkedIn 
                  sx={{color: 'white', fontSize: 60}}
                  onClick={() => window.open('https://www.linkedin.com/in/milesbellaire')}
               />
               <p>linkedin.com/in/milesbellaire</p>
            </div>
            <div className='ContactMe-icon-container'>
               <GitHub 
                  sx={{color: 'white', fontSize: 60}}
                  onClick={() => window.open('https://github.com/milesbellaire')}
               />
               <p>github.com/milesbellaire</p>
            </div>
            <div className='ContactMe-icon-container'>
               <Email 
                  sx={{color: 'white', fontSize: 60}}
                  onClick={() => window.open('mailto:mile5b311@gmail.com')}
               />
               <p>mile5b311@gmail.com</p>
            </div>
         </div>
         <div className="ContactMe-form">
            <div className='ContactMe-form-container'>
               <h3>Name</h3>
               <TextField
                  className='ContactMe-form-input'
                  placeholder='Your Name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
               />
            </div>
            <div className='ContactMe-form-container'>
               <h3>Email</h3>
               <TextField
                  className='ContactMe-form-input'
                  placeholder='example@example.com'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
               />
            </div>
            <div className='ContactMe-form-container'>
               <h3>Message</h3>
               <TextField
                  multiline={true}
                  rows={6}
                  className='ContactMe-form-input'
                  placeholder="What did you want to ask me?"
                  name='text'
                  value={formData.text}
                  onChange={handleChange}
               />
            </div>
            <div className='ContactMe-form-button'>
               <Button
                  variant='contained'
                  color='primary'
                  onClick={handleSubmit}
                  sx={{
                     px: 4,
                     py: 2,
                     fontSize: '1.1rem',
                     fontWeight: 'bold'
                  }}
               >
                  Send Message
               </Button>
            </div>
         </div>
      </div>
   );
}