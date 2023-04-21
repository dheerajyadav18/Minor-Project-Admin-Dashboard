import React from 'react';
import aboutus from "../Templetes/AboutUs.htm"
import { Header } from '../components';


const AboutUs = () => {

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Pay Attention Team!!" title="About Us" />
      <iframe name="report" height="600px" width="100%" src={aboutus} scrolling="no" title='about us' ></iframe>
    </div>
  );
};

export default AboutUs;
