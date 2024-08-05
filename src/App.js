// File: App.js
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./redux/actions/post";
import store from "./redux/store";
import { Provider } from "react-redux";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FeedPage from "./pages/FeedPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index";
function App() {
  console.log("rerendered");
  return (
    <Provider store={store}>
      <div className="App m-0 p-0">
        <Router>
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/feed" element={<FeedPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
