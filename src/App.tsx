import { Outlet } from "react-router";

import Navbar from "./components/Navbar";
import Promobanner from "./components/Promobanner";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Promobanner />
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
