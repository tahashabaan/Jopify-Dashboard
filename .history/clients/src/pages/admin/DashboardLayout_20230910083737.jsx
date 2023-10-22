import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";

const DashboardLayout = () => {
  return (
    <div>
       <main>
         <SideBar/>
         <NavBar/>

         <div className="dashboard">

         </div>

       </main>
    </div>
  )
};

export default DashboardLayout;
