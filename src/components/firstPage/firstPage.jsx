import React from "react";
import solidIcon from "../../assets/images/firstPage/solid.svg";
import googlePlayIcon from "../../assets/images/firstPage/googleplay.svg";
import appStoreIcon from "../../assets/images/firstPage/appstore.svg";
import doublePhonesIcon from "../../assets/images/firstPage/doublephones.svg";

// Importing CSS files
import "./firstpage.css";
import "./switcher.css";

const FirstPage = () => {
  return (
    <section id="firstPageWrapper" className="first-page">
      <section id="firstPage">
        <header>
          <section className="headerSideSection headerLeftSection">
            <img src={solidIcon} alt="Features" />
            <p>Features</p>
          </section>
          <section className="headerSideSection headerRightSection">
            <p>Dark Mode</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p id="signInUp">
              <i className="fa-thin fa-user-large"></i> Sign in / up
            </p>
          </section>
        </header>

        <section id="firstPageContent">
          <section id="downloadSection">
            <div id="headers">
              <h1 className="header-text">Manage All Your</h1>
              <h1 className="header-text">Money in One App</h1>
            </div>
            <div id="paragraphs">
              <p>We offer you a new generation of mobile banking.</p>
              <p>Save, spend & manage money in your pocket.</p>
            </div>
            <div id="downloadButtons">
              <img src={appStoreIcon} alt="Download on App Store" />
              <img src={googlePlayIcon} alt="Get it on Google Play" />
            </div>
            <div id="discoverSection">
              <button className="discover-more-btn">
                <i className="fa fa-chevron-down"></i>
              </button>
              <span>Discover More</span>
            </div>
          </section>

          <section id="twoPhoneImages">
            <img src={doublePhonesIcon} alt="Two Mobile Phones" />
          </section>
        </section>
      </section>
    </section>
  );
};

export default FirstPage;
