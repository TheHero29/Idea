// File: App.js
import store from "./redux/store";
import { Provider } from "react-redux";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FeedPage from "./pages/FeedPage";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index";
function App() {
  console.log("rerendered");
  return (
    //Nothing just felt bad cuz I didn't open you today. Just realized that I love you 3000. cutie!
    <Provider store={store}>
      <div className="App m-0 p-0">
        <Router>
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="*" element={<div className="p-4">this page doesent exist, return to <Link to="/" className="hover:underline text-purple-700 font-bold">main page</Link></div>} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
