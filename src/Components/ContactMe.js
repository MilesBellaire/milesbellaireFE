import { TextField } from '@mui/material';
import '../Css/ContactMe.css';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

export default function ContactMe({Ref}) {
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
                  onClick={() => window.open('https://www.linkedin.com/in/miles-bellaire')}
               />
               <p>linkedin.com/in/miles-bellaire</p>
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
               />
            </div>
            <div className='ContactMe-form-container'>
               <h3>Email</h3>
               <TextField 
                  className='ContactMe-form-input'
                  placeholder='example@example.com'
                  name='email'
                  type='email'
               />
            </div>
            <div className='ContactMe-form-container'>
               <h3>Message</h3>
               <TextField 
                  multiline={true} 
                  rows={6} 
                  className='ContactMe-form-input'
                  placeholder="What did you want to ask me?"
               />
            </div>
         </div>
      </div>
   );
}