import React from "react";
import FirstPage from "./components/firstPage";
import SecondPage from "./components/secondPage";
import ThirdPage from "./components/thirdPage";
import FourthPage from "./components/fourthPage";
import FifthPage from "./components/fifthPage";
import SixthPage from "./components/sixthPage";
import InfoBox from "./components/infoBox";
import Footer from "./components/footer"; // Importera footern

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
