import Promobanner from "./components/Promobanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

function App() {
  // return (
  //   <>
  //     <Promobanner />
  //     <Navbar />
  //     <Homepage />
  //     {/* <SignUp/> */}
  //     {/* <AboutPage/> */}
  //     {/* <ContactPage/> */}
  //     {/* <MyAccount/> */}
  //     {/* <CheckoutPage/> */}
  //     {/* <CartPage/> */}
  //     {/* <WishlistPage/> */}
  //     <Footer />
  //   </>
  // );

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
