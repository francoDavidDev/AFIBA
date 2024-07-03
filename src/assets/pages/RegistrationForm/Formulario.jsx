import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Formulario = () => {
  const form = useRef();
  const [fileError, setFileError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    
    const formData = new FormData(form.current);
    const fileInput = formData.get('my_file');
    
    // Check if file is an image
    if (fileInput && !fileInput.type.startsWith('image/')) {
      setFileError('Please upload a valid image file.');
      return;
    }

    // No need to manually convert to base64, emailjs.sendForm handles this
    emailjs.sendForm('service_df596ny', 'template_ylbg0bb', form.current, '7-MGEkvWiUORZGWZE')
      .then((result) => {
          console.log('Success:', result.text);
          setFileError(''); // Clear error message on success
      }, (error) => {
          console.log('Error:', error.text);
          setFileError('Failed to send email. Please try again later.');
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} encType="multipart/form-data">
      <label htmlFor="name">Name:</label>
      <input type="text" name="user_name" id="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" name="user_email" id="email" required />

      <label htmlFor="file">Attach file:</label>
      <input type="file" name="my_file" id="file" accept="image/*" required />

      {fileError && <p style={{ color: 'red' }}>{fileError}</p>}

      <input className="bg-white" type="submit" value="Submit" />
    </form>
  );
};

export default Formulario;
