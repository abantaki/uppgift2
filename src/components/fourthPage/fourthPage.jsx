// src/components/fourthPage.jsx
import React from "react";
import "./fourthPage.css"; // Importera CSS för fourth page

// Importera alla bilder relativt till projektets filstruktur
import moneyTransfer from "../../assets/images/fourthPage/image.svg";
import internationalPayments from "../../assets/images/fourthPage/image (1).svg";
import icon6 from "../../assets/images/fourthPage/icon (6).svg";
import icon7 from "../../assets/images/fourthPage/icon (7).svg";

const FourthPage = () => {
  return (
    <section id="fourthPageWrapper">
      <section id="fourthPage">
        <div className="fourthPageContainer">
          <div className="fourthPageText">
            <h2>Make your money transfer simple and clear</h2>
            <p>
              <i className="fa-regular fa-circle-check"></i> Banking
              transactions are free for you
            </p>
            <p>
              <i className="fa-regular fa-circle-check"></i> No monthly cash
              commission
            </p>
            <p>
              <i className="fa-regular fa-circle-check"></i> Manage payments and
              transactions online
            </p>
            <p className="learnMoreButton">
              Learn More <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </p>
          </div>
          <div>
            <img src={moneyTransfer} alt="Money Transfer" />
          </div>
        </div>

        <div className="fourthPageContainer">
          <div>
            <img src={internationalPayments} alt="International Payments" />
          </div>
          <div className="fourthPageText">
            <h2>Receive payment from international bank details</h2>
            <div className="pairs">
              <div className="pair">
                <img src={icon6} alt="Free Transactions" />
                <p>Banking transactions are free for you</p>
              </div>
              <div className="pair">
                <img src={icon7} alt="No Cash Commission" />
                <p>No monthly cash commission</p>
              </div>
            </div>
            <p className="learnMoreButton">
              Learn More <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FourthPage;
