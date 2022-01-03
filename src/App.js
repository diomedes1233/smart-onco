import React from "react";
import '../src/sass/style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";


function App() {
  return (
    <div className="App">

      <Router>
        
        <Routes>

          <Route exact path="/"
            element={<MainPage /> }>
              </Route>

          <Route exact path="/login"
            element={<LoginPage />}>
             
          </Route>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
