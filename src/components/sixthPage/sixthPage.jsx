// src/components/sixthPage.jsx
import React from "react";
import "./sixthPage.css"; // Importera CSS för sixth page

// Importera alla bilder relativt till projektets filstruktur
import phoneIcon from "../../assets/images/sixthPage/icon.svg";
import phoneIconAlt from "../../assets/images/sixthPage/icon (1).svg";
import downArrow from "../../assets/images/sixthPage/downArrow.svg";
import upArrow from "../../assets/images/sixthPage/upArrow.svg";

const SixthPage = () => {
  return (
    <section id="sixthPage">
      <div className="sections">
        <div className="contact">
          <div className="contactTitle">
            <h2 className="black large">Any questions?</h2>
            <h2 className="black large">Check out the FAQs</h2>
          </div>
          <p>Still have unanswered questions and need to get in touch?</p>
          <div className="getInTouch">
            <div className="contactOption">
              <div>
                <img src={phoneIcon} alt="phone" />
              </div>
              <p>Still have questions?</p>
              <p className="violin">
                Contact Us
                <i className="fa-sharp fa-regular fa-arrow-right violin"></i>
              </p>
            </div>
            <div className="contactOption">
              <div>
                <img src={phoneIconAlt} alt="phone" />
              </div>
              <p>Dont like phonecalls?</p>
              <p className="green">
                Contact Us
                <i className="fa-sharp fa-regular fa-arrow-right green"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="faqs">
          <div className="faq">
            <h4>Is any of my personal information stored in the App?</h4>
            <img src={downArrow} alt="downArrow" />
          </div>
          <div className="faq">
            <h4>What formats can I download my transaction history in?</h4>
            <img src={downArrow} alt="downArrow" />
          </div>
          <div className="faq open">
            <div className="title">
              <h4>Can I schedule future transfers?</h4>
              <img src={upArrow} alt="upArrow" />
            </div>
            <p>
              Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
              Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
              adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
              fermentum duis accumsan lectus non. Massa cursus molestie lorem
              scelerisque pellentesque. Nisi, enim, arcu purus gravida
              adipiscing euismod montes, duis egestas. Vehicula eu etiam quam
              tristique tincidunt suspendisse ut consequat.
            </p>
          </div>
          <div className="faq">
            <h4>When can I use Banking App services?</h4>
            <img src={downArrow} alt="downArrow" />
          </div>
          <div className="faq">
            <h4>
              Can I create my own password that is easy for me to remember?
            </h4>
            <img src={downArrow} alt="downArrow" />
          </div>
          <div className="faq">
            <h4>What happens if I forget or lose my password?</h4>
            <img src={downArrow} alt="downArrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthPage;
