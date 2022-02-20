import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ];

  return (
    <nav className="w-full h-20 bg-sky-600 py-0 px-8 border-b border-solid border-white">
      <ul className="h-full list-none flex p-o m-0 items-center justify-center">
        {links.map((link) => {
          return (
            <li key={link.id} className="mx-4">
              <NavLink
                to={link.path}
                className="nav"
                activeClassName="font-black"
                exact
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
