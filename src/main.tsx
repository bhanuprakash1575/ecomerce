import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

import "./index.css";

import App from "./App.tsx";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import Homepage from "./pages/Homepage";
import MyAccount from "./pages/MyAccountPage";
import SignUp from "./pages/Singup";
import WishlistPage from "./pages/WhishlistPage";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route
        path="/"
        element={<App />}
        errorElement={<div>Page Not Found</div>}
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
