import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Home } from "./Pages/Home";
import { KidsPage } from "./Pages/KidsPage";
import { MenPage } from "./Pages/MenPage";
import { WomenPage } from "./Pages/WomenPage";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {


  return (
    // always in react it imports with first caital letter only
    <BrowserRouter>
    <div className="App">
      <Header />
      <AllRoutes/>
      <Home/>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
