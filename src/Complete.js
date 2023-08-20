import React from "react";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import FixedSidebar from "./components/JobApplicants/FixedSideBar";
import Total from "./components/JobApplicants/Total/Total";
import TotalOne from "./components/TotalOne/TotalOne";
import TotalTwo from "./components/TotalOne/TotalTwo";
import Header from "./components/header/Header";
const Complete = () => {
  return (
    <div>
      <Filter />

      <Total />
      <TotalOne />
      {/*
     
      <Footer />
  */}
    </div>
  );
};

export default Complete;
