// src/components/infoBox.jsx
import React from "react";
import "./infoBox.css"; // Importera CSS för infobox

// Importera bilden relativt till projektets filstruktur
import notificationIcon from "../../assets/images/infoBox/notification.svg";

const InfoBox = () => {
  return (
    <section className="infobox">
      <div className="newslettercontainer">
        <img src={notificationIcon} alt="Notification Icon" />
        <h4>
          Subscribe to our newsletter to stay <br />
          informed about latest updates
        </h4>
      </div>
      <div className="subscription">
        <form className="subscription-form">
          <div className="input-button-container">
            <i className="fa-sharp fa-light fa-envelope"></i>
            <input type="email" placeholder="Your Email" required />
            <button className="button" type="submit">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InfoBox;
