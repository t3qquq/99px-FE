import { BrowserRouter, Route, Routes } from "react-router-dom";
import Discover from "../pages/Discover";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Onboarding from "../pages/Onboarding";
import Photo from "../pages/Photo";
import Signup from "../pages/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
