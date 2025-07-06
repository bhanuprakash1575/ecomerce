import Homepage from "./pages/Homepage";
import Promobanner from "./components/Promobanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/Singup";
function App() {
  return (
    <>
      <Promobanner />
      <Navbar />
      {/* <Homepage /> */}
      <SignUp/>
      <Footer/>
    </>
  );
}

export default App;
