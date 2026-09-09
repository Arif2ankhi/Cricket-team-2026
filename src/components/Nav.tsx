import {  AiFillDollarCircle } from "react-icons/ai";
import Logo from "../assets/logo.png"
// import { useState } from "react";
const Nav = ({coin} : {coin: number}) => {
  
    return (
        <nav className=" bg-red-100" >
      <div className="flex justify-between container mx-auto items-center">
        <img src= {Logo} alt="" />
      <ul className="flex gap-4 items centre">
        <li>Home</li>
        <li>Fixture</li>
        <li>Players</li>
        <li>Schedule</li>
      </ul>
      <h2 className="font-bold text-4xl text-black flex gap-1">
        <AiFillDollarCircle />
        {coin}
        </h2>
      </div>
    </nav>
    );
};

export default Nav;