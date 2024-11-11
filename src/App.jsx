import React from "react";
import "././assets/css/main.css";
import FirstPage from "./components/firstpage/firstPage";
import SecondPage from "./components/secondPage/secondPage";
import ThirdPage from "./components/thirdPage/thirdPage";
import FourthPage from "./components/fourthPage/fourthPage";
import FifthPage from "./components/fifthPage/fifthPage";
import SixthPage from "./components/sixthPage/sixthPage";
import InfoBox from "./components/infoBox/InfoBox";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <InfoBox />
      <Footer /> {/* Footern läggs till här */}
    </div>
  );
}

export default App;
