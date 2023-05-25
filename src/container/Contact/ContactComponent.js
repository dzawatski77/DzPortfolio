import React, {useState, useRef} from "react";
import emailjs from 'emailjs-com';
import './Contact.css';

const Result =() =>{
    return(
        <p>Your message has been sent!</p>
    )
}

function ContactComponent(props) {
    const [result, showResult] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('damiengmailconnect', 'damienreactportfolio', form.current, 'xS6d30N4cYzuKSLap')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };

      setTimeout(() => {
        showResult(false);
        }, 5000);
      

    return(
        <form className='app_contact_form' action="" ref={form} onSubmit={sendEmail}>
            <div className='formWord'>
              <h2>Get In Touch</h2>
              <br/>
              <input className='input100'
              type='text'
              name='fullName'
              placeholder="Name"
              required />
              
              <input className='input100'
              type='text'
              name='email'
              placeholder="Email"
              required />
              
              <input className='input100'
              type='text'
              name='phone'
              placeholder="Phone" />
              
            </div>
            <div className='formWord'>
              
              <textarea name='message'
              placeholder="Message"
              cols="5" rows="5" required></textarea>
              
              <button>Submit</button>
              <div className='row'>{result ? <Result/> : null }</div>
            </div>
          </form>
    );
}

export default ContactComponent;