import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <Sidebar />
      <div className="drawer-content flex flex-col">
        <Navbar />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
