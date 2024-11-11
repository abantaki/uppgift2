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
      <header>
        <section className="headerSideSection headerLeftSection">
          <img src={solidIcon} alt="Features" />
        </section>
        <section className="headerSideSection headerRightSection">
          <p>Dark Mode</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>{" "}
            {/* Make sure this class matches the CSS */}
          </label>
          <p id="signInUp">
            <i className="fa-solid fa-user"></i> Sign in / up
          </p>
        </section>
      </header>

      <section id="firstPageContent">
        <section id="downloadSection">
          <div id="headers">
            <h1>Manage All Your</h1>
            <h3>Money in One App</h3>
          </div>
          <div id="paragraphs">
            <p>We offer you a new generation of mobile banking.</p>
            <p>Save, spend & manage money in your pocket.</p>
          </div>
          <section id="downloadButtons">
            <img src={appStoreIcon} alt="Download on App Store" />
            <img src={googlePlayIcon} alt="Get it on Google Play" />
          </section>
        </section>

        <section id="discoverSection">
          <img src={doublePhonesIcon} alt="Discover More" />
          <span>Discover More</span>
        </section>
      </section>

      <div className="divider"></div>
    </section>
  );
};

export default FirstPage;
