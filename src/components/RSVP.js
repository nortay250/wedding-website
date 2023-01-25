import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
  process.env;

function RSVP() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        form.current,
        REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          e.target.reset();
          toast.success('Your message has been sent successfully.');

          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          toast.error('Sorry, something went wrong.');
          console.log(error.text);
        }
      );
  };

  return (
    <div id='rsvp' className='section-padding bg-img bg-fixed'>
      <Toaster />
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            {' '}
            <span className='oliven-title-meta text-center'>
              Will you attend?
            </span>
            <h2 className='oliven-title text-center'>R.S.V.P</h2>
            <br />
            <form ref={form} onSubmit={sendEmail}>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    name='user_name'
                    className='form-control'
                    placeholder='Name'
                    required
                  />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='email'
                    name='user_email'
                    className='form-control'
                    placeholder='Email'
                  />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    cols='30'
                    rows='7'
                    className='form-control'
                    placeholder='Message'
                  ></textarea>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    cols='30'
                    rows='7'
                    className='form-control'
                    placeholder='Message'
                  ></textarea>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='question'
                    id='question'
                    cols='30'
                    rows='7'
                    className='form-control'
                    placeholder='What is one question or challenge you have for the couple?'
                  ></textarea>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='SEND' />{' '}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSVP;
