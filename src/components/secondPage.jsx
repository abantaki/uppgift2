// src/components/secondPage.jsx
import React from "react";
import "../assets/css/secondPage.css"; // Importera CSS för second page

// Importera alla bilder relativt till projektets filstruktur
import logo from "../assets/images/secondPage/logo.svg";
import logo1 from "../assets/images/secondPage/logo (1).svg";
import logo2 from "../assets/images/secondPage/logo (2).svg";
import logo3 from "../assets/images/secondPage/logo (3).svg";
import logo4 from "../assets/images/secondPage/logo (4).svg";
import mainImage from "../assets/images/secondPage/image.svg";
import icon1 from "../assets/images/secondPage/categories/icon.svg";
import icon2 from "../assets/images/secondPage/categories/icon (1).svg";
import icon3 from "../assets/images/secondPage/categories/icon (2).svg";
import icon4 from "../assets/images/secondPage/categories/icon (3).svg";
import icon5 from "../assets/images/secondPage/categories/icon (4).svg";
import icon6 from "../assets/images/secondPage/categories/icon (5).svg";

const SecondPage = () => {
  return (
    <section id="secondPage">
      <header>
        {/* Använda bilder från den importerade variabler */}
        <img src={logo} alt="Logo" />
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
      </header>

      <section id="secondPageContent">
        <div id="leftSecondPageContent">
          <img src={mainImage} alt="Main Image" />
        </div>
        <div id="rightSecondPageContent">
          <h2>App Features</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat mollis egestas. Nam <br /> luctus facilisis ultrices.
            Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>

          <div id="rightPageCategories">
            {[
              {
                imgSrc: icon1,
                title: "Easy Payments",
                description:
                  "Id mollis consectetur congue egestas egestas suspendisse blandit justo.",
              },
              {
                imgSrc: icon2,
                title: "Core Statistics",
                description:
                  "Id mollis consectetur congue egestas egestas suspendisse blandit justo.",
              },
              {
                imgSrc: icon3,
                title: "Regular Cashback",
                description:
                  "Id mollis consectetur congue egestas egestas suspendisse blandit justo.",
              },
              {
                imgSrc: icon4,
                title: "Data Security",
                description:
                  "Id mollis consectetur congue egestas egestas suspendisse blandit justo.",
              },
              {
                imgSrc: icon5,
                title: "Support 24/7",
                description:
                  "Id mollis consectetur congue egestas egestas suspendisse blandit justo.",
              },
              {
                imgSrc: icon6,
                title: "Top Standards",
                description:
                  "Id mollis consectetur congue egestas egestas suspendisse blandit justo.",
              },
            ].map((category, index) => (
              <div className="category" key={index}>
                <div>
                  <img src={category.imgSrc} alt={category.title} />
                </div>
                <div>
                  <h4>{category.title}</h4>
                  <p>{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default SecondPage;
