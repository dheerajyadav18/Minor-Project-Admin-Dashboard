import React from 'react';
import { Header } from '../components';
import contactus from "../Templetes/ContactUs.htm"
const ContactUs = () => {

  return (
    <div className="m-2 md:m-5 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Pay Attention Team!!" title="Contact Us" />
      <iframe name="report" height="650px" width="100%" src={contactus} scrolling="no"  ></iframe>
    </div>
  );
};
export default ContactUs;   
