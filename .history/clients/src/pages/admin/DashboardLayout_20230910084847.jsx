import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
       <main>
        <section>
         <SideBar/>
        </section>
         <section>
          <NavBar/>
         <div className="dashboard">
             <Outlet/>
         </div>
        </section>
       </main>
    </div>
  )
};

export default DashboardLayout;
