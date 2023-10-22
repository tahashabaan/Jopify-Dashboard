import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";

const DashboardLayout = () => {
  return (
    <div>
       <main>
         <SideBar/>
         <NavBar/>

       </main>
    </div>
  )
};

export default DashboardLayout;
