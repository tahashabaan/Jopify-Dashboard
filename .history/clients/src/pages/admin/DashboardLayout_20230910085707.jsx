import React from "react";
import { Outlet } from "react-router-dom";

import Wrapper from "./DashboardStyle";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";

const DashboardLayout = () => {
  return (
    <Wrapper>
       <main>
        <section>
         <SideBar  className='left__sec'/>
        </section>
         <section className="right__sec">
          <NavBar/>
         <div className="dashboard">
             <Outlet/>
         </div>
        </section>
       </main>
    </Wrapper>
  )
};

export default DashboardLayout;
