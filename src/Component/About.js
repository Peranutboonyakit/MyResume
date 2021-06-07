import React from "react";
import {FiPhoneCall} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineHome} from 'react-icons/ai'

const About = () => {
  return (
    <div className="bg">
      <div className="info">
        <h1 className="h1">INFORMATION</h1>
        <p>
          My name is Peranut Boonyakit. You can call me Pepo.
          <br />I am 25 years old.
          <br />I was born in Phetchabun and now I live in Nonthaburi.
          <br />I graduated with a bachelor's degree in Industrial Physics and
          Medical Instrument
          <br />
          from King Mongkut's University of Technology North Bangkok.
          <br />I have skill for Developer from Codecamp Thai Programmer.
        </p>
      </div>

      <div className="info-contact">
        <h1 className="h1">CONTACT</h1>
        <p><AiOutlineHome className='icon'/> : 28/897 Politan rive <br/>soi Nonthaburi 15 Nonthaburi 11000</p>
        <p><FiPhoneCall className='icon'/> : 062-525-3851</p>
        <p><HiOutlineMail className='icon'/> : peranut.pepo@hotmail.com</p>
      </div>
    </div>
  );
};

export default About;
