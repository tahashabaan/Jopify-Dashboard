import React from "react";
import { Outlet } from "react-router-dom";

import Wrapper from "./DashboardStyle";
import SideBar from "../../components/Bar/SideBar";
import NavBar from "../../components/Bar/NavBar";

const DashboardLayout = () => {
  return (
    <Wrapper>
      <main>
        <SideBar className="left__sec" />
        <section className="right__sec">
          <NavBar />
          <div className="dashboard">
            <Outlet />
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

export default DashboardLayout;
