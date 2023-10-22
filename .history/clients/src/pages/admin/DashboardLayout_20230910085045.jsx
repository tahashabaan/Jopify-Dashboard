import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <Wrapper>
       <main>
        <section>
         <SideBar className='left__sec'/>
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
