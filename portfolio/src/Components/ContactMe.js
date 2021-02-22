import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_tj2w3cg', 'template_zutdfvt', e.target, 'user_69fv3Uo24AIuDvBPFY6d1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="lg:mx-20">
        <h3 className="text-white font-bold text-lg" style={{textAlign: "center"}}>Contact me!</h3>
        <form className="m-5" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label className="text-white">Name:</label>
        <input className="m-5 input-form" type="text" name="user_name" />
        <label className="text-white">Email</label>
        <input className="m-5 input-form" type="email" name="user_email" />
        <label className=" text-white mr-5" >Message</label>
        <textarea className="input-form" name="message"/>
        <input className="p-2 bg-pink-400 w-full hover:bg-pink-500" type="submit" value="Send" style={{borderRadius: '20px', color: 'white'}}/>
        </form>
    </div>
    );
}