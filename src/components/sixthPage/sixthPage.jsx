// src/components/sixthPage.jsx
import React, { useState } from "react";
import "./sixthPage.css"; // Importera CSS för sixth page

// Importera alla bilder relativt till projektets filstruktur
import phoneIcon from "../../assets/images/sixthPage/icon.svg";
import phoneIconAlt from "../../assets/images/sixthPage/icon (1).svg";
import downArrow from "../../assets/images/sixthPage/downArrow.svg";
import upArrow from "../../assets/images/sixthPage/upArrow.svg";

const SixthPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const faqs = [
    "Is any of my personal information stored in the App?",
    "What formats can I download my transaction history in?",
    "Can I schedule future transfers?",
    "When can I use Banking App services?",
    "Can I create my own password that is easy for me to remember?",
    "What happens if I forget or lose my password?",
  ];

  const faqDetails = [
    "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
  ];

  return (
    <section id="sixthPageWrapper" className="sixth-page">
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
          {faqs.map((faq, index) => (
            <div
              className={`faq ${openFaqIndex === index ? "open" : ""}`}
              key={index}
              onClick={() => toggleFaq(index)}
            >
              <div className="title">
                <h4>{faq}</h4>
                <img
                  src={openFaqIndex === index ? upArrow : downArrow}
                  alt="toggleArrow"
                />
              </div>
              {openFaqIndex === index && <p>{faqDetails[0]}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
    </section>
  );
};

export default SixthPage;
