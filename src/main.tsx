import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

import Homepage from "./pages/Homepage";

import SignUp from "./pages/Singup";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MyAccount from "./pages/MyAccountPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WhishlistPage";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route
        path="/"
        element={<App />}
        errorElement={<div>Error occurred</div>}
      >
        <Route path="" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
