import React, { useState } from "react";
import { Link } from "react-router-dom";
// import data

//import icon arrow
import { RiArrowRightSLine } from "react-icons/ri";
import { NAV } from "../../data/header/index";

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownRedes, setDropdownRedes] = useState(false);

  return (
    <nav className="hidden sm:flex ">
      <ul className="flex text-primary-200 font-semibold  gap-x-6">
        {NAV.map((item, index) => {
          return (
            <li
              key={index}
              className="hover:text-primary-400  text-sm cursor-pointer transition-all duration-100"
            >
              <Link to={item.href} >{item.name}</Link>
            </li>
          );
        })}
      
    
      </ul>
    </nav>
  );
};

export default Nav;
