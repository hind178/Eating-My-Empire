import React from "react";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menu";

const Footer = () => {
  return (
    <footer className="bg-zinc-600 text-black">
      <div className="flex justify-center mb-6 md:items-center sm:px-14 px-4 bg-orange-500 py-7">
        <h3
          className="flex justify-center mb-6 lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold pt-3
         md:w-2/5" >
       
          <SocialIcons Icons={Icons} />
        </h3>
       
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10
      text-center pt-2 pb-2 text-black-400 text-sm pb-8"
      >
        <span>© 2022 Made with <ion-icon name="heart-circle-outline"></ion-icon> All rights reserved.</span>
    
        
      </div>
    </footer>
  );
};

export default Footer;