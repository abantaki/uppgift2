import React, { useState } from "react";
import "./infoBox.css";
import notificationIcon from "../../assets/images/infoBox/notification.svg";

const InfoBox = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <section id="infoBox" className="info-box">
      <section className="infobox">
        <div className="newslettercontainer">
          <img src={notificationIcon} alt="Notification Icon" />
          <h4>
            Subscribe to our newsletter to stay <br />
            informed about latest updates
          </h4>
        </div>
        <div className="subscription">
          <form className="subscription-form" onSubmit={handleSubmit}>
            {isSubmitted && (
              <p className="sent-message">Sent</p> // Display the "Sent" message
            )}
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
    </section>
  );
};

export default InfoBox;
