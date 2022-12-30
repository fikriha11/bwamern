import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from "page/Landingpage";
import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Landingpage}></Route>
      </Router>
    </div>
  );
}

export default App;
