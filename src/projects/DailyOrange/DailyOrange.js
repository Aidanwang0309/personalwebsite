import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DescriptionBlock from "../../components/DescriptionBlock/DescriptionBlock";
import "./DailyOrange.scss";

const DailyOrange = () => {
  return (
    <div>
      <Header />
      <DescriptionBlock size="1" />
      <DescriptionBlock
        position="middle"
        size="2"
        company="The Daily Orange"
        date="SEP 2016"
        website="HTTP://DAILYORANGE.COM/2016/11/BASKETBALL-GUIDE-2016/"
      />
      <DescriptionBlock size="1" />
      <DescriptionBlock size="2" />
      <div
        className="grid grid-box project-description-detail"
        style={{ width: "66.6vw", top: "160px" }}
      />

      <Footer />
    </div>
  );
};

export default DailyOrange;
