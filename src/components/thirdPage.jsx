// src/components/thirdPage.jsx
import React from "react";
import "../assets/css/thirdPage.css"; // Importera CSS för third page

// Importera alla bilder relativt till projektets filstruktur
import iphone12Pro from "../assets/images/thirdPage/iPhone 12 Pro.svg";
import iphone12Pro1 from "../assets/images/thirdPage/iPhone 12 Pro (1).svg";
import iphone12Pro2 from "../assets/images/thirdPage/iPhone 12 Pro (2).svg";

const ThirdPage = () => {
  return (
    <section id="thirdPageWrapper">
      <section id="thirdPage">
        <h2>How Does it Work?</h2>
        <div className="bilder">
          <img src={iphone12Pro} alt="iPhone 12 Pro" />
          <img src={iphone12Pro1} alt="iPhone 12 Pro (1)" />
          <img src={iphone12Pro2} alt="iPhone 12 Pro (2)" />
        </div>
        <div id="transactionHistory">
          <h4>Latest transaction History</h4>
          <p>
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
            Arcu sociis tristique <br />
            quisque hac in consectetur condimentum.
          </p>
        </div>
      </section>
    </section>
  );
};

export default ThirdPage;
