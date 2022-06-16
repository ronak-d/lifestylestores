import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Home } from "./Pages/Home";
import { KidsPage } from "./Pages/KidsPage";
import { MenPage } from "./Pages/MenPage";
import { WomenPage } from "./Pages/WomenPage";

function App() {


  return (
    // always in react it imports with first caital letter only
    <div className="App">
      <Home/>
      <Header />
      <MenPage />
      <WomenPage/>
      <KidsPage/>
      <Footer />
    </div>
  );
}

export default App;
