import "./App.css";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import AdminPage from "./pages/AdminPage";
import AdminSignin from "./pages/Auth/AdminSignin";
import Profile from "./pages/Profile";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import { AdminProtected } from "./components/ProtectedRoutes/adminProtected";
import { Auth0Provider } from "@auth0/auth0-react";
import HajjAndUmrahPage from "./pages/HajjAndUmrahPage";
import PlanningAndPreparations from "./components/HajjAndUmrahSections/PlanningAndPreparations";
import Travel from "./components/HajjAndUmrahSections/Travel";
import UmrahGuide from "./components/HajjAndUmrahSections/UmrahGuide";
import HajjGuide from "./components/HajjAndUmrahSections/HajjGuide";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutFailed from "./components/Checkout/CheckoutFailed";
import CulturePage from "./pages/CulturePage";
import CultureDetailPage from "./pages/CultureDetailPage";


function App() {
  return (
    <Auth0Provider
      domain="dev-ol7wllf5.us.auth0.com"
      clientId="hQ6YXRZbAU14vp5DqTx156cyAYTqKvfc"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="adminSignin" element={<AdminSignin />} />
            <Route path="/hajj&Umrah" element={<HajjAndUmrahPage/>}/> 
            <Route path="/checkout" element={<CheckoutPage />}/>
            <Route path="/checkout/failed" element={<CheckoutFailed />}/>
            <Route
              path="/culture/*"
              element={
                <ProtectedRoute redirectTo={"/"}>
                  <CultureDetailPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/spots/*"
              element={
                <ProtectedRoute redirectTo={"/"}>
                  <CulturePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/planningAndPreparations"
              element={
                <ProtectedRoute redirectTo={"/"}>
                  <PlanningAndPreparations />
                </ProtectedRoute>
              }
            />
            <Route
              path="/travel"
              element={
                <ProtectedRoute redirectTo={"/"}>
                  <Travel />
                </ProtectedRoute>
              }
            />
            <Route
              path="/umrahGuide"
              element={
                <ProtectedRoute redirectTo={"/"}>
                  <UmrahGuide />
                </ProtectedRoute>
              }
            />
            <Route
              path="/hajjGuide"
              element={
                <ProtectedRoute redirectTo={"/"}>
                  <HajjGuide />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute redirectTo={"/"}>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminProtected redirectTo={"/"}>
                  <AdminPage />
                </AdminProtected>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
