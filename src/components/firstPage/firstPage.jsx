import React from "react";
import solidIcon from "../../assets/images/firstPage/solid.svg";
import googlePlayIcon from "../../assets/images/firstPage/googleplay.svg";
import appStoreIcon from "../../assets/images/firstPage/appstore.svg";
import doublePhonesIcon from "../../assets/images/firstPage/doublephones.svg";

// Importing CSS files
import "./firstpage.css";
import "./switcher.css";

const FirstPage = () => {
  const root = document.querySelector(":root");
  const PRIMARY_WHITE = "#f3f6ff";
  const SECONDARY_WHITE = "#ffffff";
  const PRIMARY_DARK = "#33354D";
  const SECONDARY_DARK = "#0B0F19";

  function toggleValues() {
    const computedStyle = getComputedStyle(root);

    const primaryBgValue = computedStyle.getPropertyValue(
      "--primaryBackground"
    );
    const newPrimaryValue =
      primaryBgValue === PRIMARY_WHITE ? PRIMARY_DARK : PRIMARY_WHITE;

    const secondaryBgValue = computedStyle.getPropertyValue(
      "--secondaryBackground"
    );
    const newSecondaryValue =
      secondaryBgValue === SECONDARY_WHITE ? SECONDARY_DARK : SECONDARY_WHITE;

    const currentTextValue = computedStyle.getPropertyValue("--text");
    const newTextValue = currentTextValue === "black" ? "white" : "black";

    root.style.setProperty("--primaryBackground", newPrimaryValue);
    root.style.setProperty("--secondaryBackground", newSecondaryValue);
    root.style.setProperty("--text", newTextValue);
  }
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
              <input type="checkbox" onChange={() => toggleValues()} />
              <span className="slider round"></span>
            </label>
            <button id="signInUp">
              <i className="fas fa-user"></i> Sign in / up
            </button>
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
                <i className="fas fa-chevron-down"></i>
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
