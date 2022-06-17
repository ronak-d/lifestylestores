import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./Routes/AllRoutes";
import Landing from "./Pages/Landing";

function App() {


  return (
    // always in react it imports with first caital letter only
    <BrowserRouter>
    <div className="App">
      <Header />
      <AllRoutes/>
      <Landing/>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
