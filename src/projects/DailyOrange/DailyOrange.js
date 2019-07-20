import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DescriptionBlock from "../../components/DescriptionBlock/DescriptionBlock";
import Block from "../../components/Block/Block";
import daily1 from "../../assets/daily1.png";
import daily2 from "../../assets/daily2.png";
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

      <div
        className="grid grid-box project-description-detail"
        style={{ width: "66.6vw", top: "160px" }}
      >
        <div className="project-description-detail-box">
          <div className="project-description-detail-responsibility">
            <h2> Responsibility </h2>
            <ul>
              <li>Design and build the website personally from scratch</li>
              <li>Design the theme Page for each persona</li>
              <li>Wordpress hook Designing</li>
              <li>REST and API Design</li>
              <li>
                Diagnosing problems including Client, HTTP/Network, Server,
                Database, OS
              </li>
            </ul>
          </div>

          <div className="project-description-detail-idea">
            <h2> Designing Idea</h2>
            <ul>
              <li>
                Focusing on the Motion from this topic using parallel effect
              </li>
              <li>Focusing on the concise and info leading design</li>
              <li>
                Focusing on the Mobile Deliverable because on the data driven
                analysis of the main stream.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <DescriptionBlock size="2" img={daily2} />
      <DescriptionBlock size="1" />
      <Footer />
    </div>
  );
};

export default DailyOrange;
