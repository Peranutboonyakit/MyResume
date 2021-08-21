import React from "react";
import { Image } from "@chakra-ui/image";
import exchange from '../Image/exchange.png'
import income from '../Image/income.png'
import darklight from '../Image/darklight.png'
import picture_project from '../Image/picture_project.jpg'
import './Project.css'

const Skill = () => {
  return (
    <div className="bg-skill">
      <h1 className="h1">Project</h1>
      
      <div className="icon-skill">
        <a href='https://peranutboonyakit.github.io/ProjectJS/Exchange%20Money/index.html'>
          <Image src={exchange} borderRadius='10px' boxSize='170px' m={5} /><p>Exchange Money</p></a>
        <a href='https://peranutboonyakit.github.io/ProjectJS/Income%20and%20Expenses/index.html'>
          <Image src={income} borderRadius='10px' boxSize='170px' m={5} /><p>Exchange Money</p></a>
        <a href='https://peranutboonyakit.github.io/ProjectJS/Exchange%20Money/index.html'>
          <Image src={darklight} borderRadius='10px' boxSize='170px' m={5} /><p>Exchange Money</p></a>
        <a href='https://peranutboonyakit.github.io/Flutter_Covid_UI/'>
          <Image src={picture_project} borderRadius='10px' boxSize='170px' m={5} /><p>Flutter UI</p></a>
      </div>
    </div>
  );
};

export default Skill;
