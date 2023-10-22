import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";
import Wrapper from "./SideBarStyle";


import { MdAddCard } from "react-icons/md";
import { MdOutlineQueryStats } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { ImProfile } from "react-icons/im";

const Menu = () => {
  return (
    <Wrapper class>
      <h1>
        <Logo />
      </h1>

      <nav>
        <ul>
          <li>
            <MdAddCard /> <Link to="/dashboard">Add Job</Link>
          </li>
          <li>
            <MdOutlineQueryStats> </MdOutlineQueryStats>
            <Link to="/dashboard/all-jobs">All Jobs</Link>
          </li>
          <li>
            <ImStatsDots /> <Link to="/dashboard/stats">Stats</Link>
          </li>
          <li>
            <ImProfile /> <Link to="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Menu;
