import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { NAV } from "../../data/header/index";
import { motion } from "framer-motion";

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => setDropdown(true);
  const handleMouseLeave = () => setDropdown(false);

  return (
    <nav className="hidden sm:flex">
      <ul className="flex text-primary-200 font-semibold gap-x-6">
        {NAV.map((item, index) => (
          <li
            key={index}
            className="relative group text-sm cursor-pointer transition-all duration-100 hover:text-primary-400"
            onMouseEnter={item.name === "TORNEOS" ? handleMouseEnter : null}
            onMouseLeave={item.name === "TORNEOS" ? handleMouseLeave : null}
          >
            <Link to={item.href}>{item.name}</Link>
            {item.subMenu && item.name === "TORNEOS" && (
              <motion.ul 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: dropdown ? 1 : 0, y: dropdown ? 0 : 10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-full bg-primary-100 rounded shadow-lg z-10"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                {item.subMenu.map((subItem, subIndex) => (
                  <motion.li 
                    key={subIndex} 
                    className="px-4 py-2 hover:bg-primary-300 hover:text-primary-400"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link to={subItem.href}>{subItem.name}</Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
