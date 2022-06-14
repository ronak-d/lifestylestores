import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { MenPage } from "./Pages/MenPage";

function App() {
  return (
    // always in react it imports with first caital letter only
    <div className="App">
      <Header />
      <MenPage />
      <Footer />
    </div>
  );
}

export default App;
