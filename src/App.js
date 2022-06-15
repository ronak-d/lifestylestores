import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { KidsPage } from "./Pages/KidsPage";
import { MenPage } from "./Pages/MenPage";
import { WomenPage } from "./Pages/WomenPage";

function App() {

  const [loading, setLoading] = useState(false);

  return (
    // always in react it imports with first caital letter only
    <div className="App">
      {/* {loading && <div>Loading</div>} */}
      <Header />
      <MenPage />
      {/* <WomenPage/>
      <KidsPage/> */}
      <Footer />
    </div>
  );
}

export default App;
