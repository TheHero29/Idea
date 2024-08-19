// File: App.js
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FeedPage from "./pages/FeedPage";
import AboutPage from "./pages/AboutPage";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchUser } from "./redux/actions/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "./index";
import { ProfilePage } from "./pages/ProfilePage";
function App() {
  console.log("rerendered");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    //Nothing just felt bad cuz I didn't open you today. Just realized that I love you 3000. cutie!

      <div className="App m-0 p-0">
        <Router>
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/about" element={<AboutPage></AboutPage>} />
            <Route path="/user/:id" element={<ProfilePage />} />
            <Route path="*" element={<div className="p-4">this page doesent exist, return to <Link to="/" className="hover:underline text-purple-700 font-bold">main page</Link></div>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
