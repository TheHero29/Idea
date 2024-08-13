// File: App.js
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
    //Nothing just felt bad cuz I didn't open you today. Just realized that I love you 3000. cutie!
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
