import React from "react";
import Yellow from "../Image/Yellow.png";
import facebook from "../Image/facebook.png";
import instagram from "../Image/instagram.png";
import line from "../Image/line.png";
import { Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <div className="Bg-welcome">
      <div className="Logo-image">
        <img  src={Yellow} alt='Pepo'/>
      </div>

      <div className="Text-name">
        <h1 className="h1">PERANUT BOONYAKIT</h1>

        <div className="Contact">
          <a href="https://web.facebook.com/PEPO.demonic/">
            <Image src={facebook} width="50px" mr={5}/>
          </a>
          <a href="https://www.instagram.com/2pepo/">
            <Image src={instagram} width="50px" mr={5}/>
          </a>
          <a href="https://line.me/ti/p/kUdXU71nK9">
            <Image src={line} width="50px" mr={5}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
