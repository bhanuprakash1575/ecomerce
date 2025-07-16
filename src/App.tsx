import Homepage from "./pages/Homepage";
import Promobanner from "./components/Promobanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/Singup";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MyAccount from "./pages/MyAccountPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WhishlistPage";
function App() {
  return (
    <>
      <Promobanner />
      <Navbar />
      <Homepage />
      {/* <SignUp/> */}
      {/* <AboutPage/> */}
      {/* <ContactPage/> */}
      {/* <MyAccount/> */}
      {/* <CheckoutPage/> */}
      {/* <CartPage/> */}
      {/* <WishlistPage/> */}
      <Footer/>
    </>
  );
}

export default App;
