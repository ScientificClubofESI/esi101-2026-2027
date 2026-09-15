"use client"
import React from "react";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";
import './navbar.css'

const NabBar = () => {
    const theme = useTheme();
};

const links = ["Home" , "Who's behind Esi 101" , "Ask a student" , "Still wondering ?" , "Contact"]

const NavBar = (toggleChatbot) => {
  return (
    <div className="navbar">
    

      <div className="links">
          <div className="logo">
    <img src="/assets/Logo.svg"></img>
    
</div>
<div className="links-inner">
   {links.map((link , index)=>(

          <a className="font-haetten" href={link} key={index}>{link}</a>)
          
        )}
</div>
       
<ThemeToggle />

      </div>
      
      <div className="chatbot" onClick={()=>{toggleChatbot(true)}}>
        <p className="font-haetten">Chat with Cissou
          </p>
        <img src="/assets/cissouBtn.svg"></img>
    
      </div>
      
    </div>
  );
};

export default NavBar;
