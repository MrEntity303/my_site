"use client";

import React, { useState } from 'react';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  return (
    <nav className="bg-customGray fixed top-0 left-0 w-full flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <img src="\img\logo_resized.png" alt="logo" className="w-16 h-16"/>
        <a href="../dowload_resource/CV_Aggiornato_2025.pdf"><button className="justify-end border border-white rounded-full font-bold hover:bg-white hover:text-blue-500 px-4 py-2">Download CV</button></a>
      </div>
      <ul className="hidden lg:flex justify-end p-4 text-white text-xl space-x-14">
        <li><a href="#home" onClick={() => setActiveLink("#home")} className={`focus:text-sky-400 ${activeLink === "#home" ? "text-sky-400" : ""}`}>Home</a></li>
        <li><a href="#about" onClick={() => setActiveLink("#about")} className={`focus:text-sky-400 ${activeLink === "#about" ? "text-sky-400" : ""}`}>Chi sono</a></li>
        <li><a href="#exp" onClick={() => setActiveLink("#exp")} className={`focus:text-sky-400 ${activeLink === "#exp" ? "text-sky-400" : ""}`}>Esperienze</a></li>
        <li><a href="#tech-skills" onClick={() => setActiveLink("#tech-skills")} className={`focus:text-sky-400 ${activeLink === "#tech-skills" ? "text-sky-400" : ""}`}>Skills</a></li>
        <li><a href="#projects" onClick={() => setActiveLink("#projects")} className={`focus:text-sky-400 ${activeLink === "#projects" ? "text-sky-400" : ""}`}>Progetti</a></li>
        <li><a href="#links" onClick={() => setActiveLink("#links")} className={`focus:text-sky-400 ${activeLink === "#links" ? "text-sky-400" : ""}`}>Links</a></li>
      </ul>
      {/* Menu verticale */}
      <button className="lg:hidden p-4" onClick={() => setIsOpen(!isOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
        {isOpen && (
          <ul className="lg:hidden absolute top-16 right-0 space-y-4 pt-2 p-4 rounded-lg  bg-customGray">
            <li><a href="#home" onClick={() => setActiveLink("#home")} className={`focus:text-sky-400 ${activeLink === "#home" ? "text-sky-400" : ""}`}>Home</a></li>
            <li><a href="#about" onClick={() => setActiveLink("#about")} className={`focus:text-sky-400 ${activeLink === "#about" ? "text-sky-400" : ""}`}>Chi sono</a></li>
            <li><a href="#exp" onClick={() => setActiveLink("#exp")} className={`focus:text-sky-400 ${activeLink === "#exp" ? "text-sky-400" : ""}`}>Esperienze</a></li>
            <li><a href="#tech-skills" onClick={() => setActiveLink("#tech-skills")} className={`focus:text-sky-400 ${activeLink === "#tech-skills" ? "text-sky-400" : ""}`}>Skills</a></li>
            <li><a href="#projects" onClick={() => setActiveLink("#projects")} className={`focus:text-sky-400 ${activeLink === "#projects" ? "text-sky-400" : ""}`}>Progetti</a></li>
            <li><a href="#links" onClick={() => setActiveLink("#links")} className={`focus:text-sky-400 ${activeLink === "#links" ? "text-sky-400" : ""}`}>Links</a></li>
            </ul>
            )}
    </nav>
  );
};

export default NavBar;
