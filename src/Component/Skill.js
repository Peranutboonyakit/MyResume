import React from "react";
import {Image} from '@chakra-ui/react'
import html from '../Image/html.png'
import css from '../Image/css.png'
import javascript from '../Image/javascript.png'
import react from '../Image/react.png'

const Skill = () => {
  return (
    <div className="bg-skill">
      <h1 className="h1">Skill</h1>

      <div className="icon-skill">
        <Image src={html} borderRadius='10px' boxSize='130px' m={5}/>
        <Image src={css} borderRadius='10px' boxSize='130px' m={5}/>
        <Image src={javascript} borderRadius='10px' boxSize='130px' m={5}/>
        <Image src={react} borderRadius='10px' boxSize='130px' m={5}/>
      </div>
    </div>
  );
};

export default Skill;
