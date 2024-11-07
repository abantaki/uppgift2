// src/components/fifthPage.jsx
import React from "react";
import "../assets/css/fifthPage.css"; // Importera CSS för fifth page

// Importera alla bilder relativt till projektets filstruktur
import quotes from "../assets/images/fifthPage/quotes.svg";
import rating from "../assets/images/fifthPage/rating.svg";
import imageFannie from "../assets/images/fifthPage/image.svg";
import imageAlbert from "../assets/images/fifthPage/image (1).svg";

const FifthPage = () => {
  return (
    <section id="fifthPageWrapper">
      <section id="fifthPage">
        <div className="fifthPageSection">
          <h1 className="black">Clients are Loving Our App</h1>
        </div>

        <div className="fifthPageSection review">
          <img className="quote" src={quotes} alt="Quote Icon" />
          <img src={rating} alt="Rating" />
          <p>
            Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis.
            Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel.
            Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
          </p>
          <div className="profile">
            <img src={imageFannie} alt="Fannie" />
            <div className="info">
              <h3 className="black">Fannie Summers</h3>
              <p>Designer</p>
            </div>
          </div>
        </div>

        <div className="fifthPageSection review">
          <img className="quote" src={quotes} alt="Quote Icon" />
          <img src={rating} alt="Rating" />
          <p>
            Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin
            amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare
            dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
          </p>
          <div className="profile">
            <img src={imageAlbert} alt="Albert" />
            <div className="info">
              <h3 className="black">Albert Flores</h3>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FifthPage;
