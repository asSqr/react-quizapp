import React from "react";
import { HashRouter as Router, Route} from "react-router-dom";
import Quiz from "./components/Quiz/Quiz";
import Home from "./components/Home/Home";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Router>
        {/* exact :  完全一致のときにルーティングする*/}
        <Route path="/" exact component={Home} />
        <Route path="/quiz" exact component={Quiz} />
      </Router>
    </div>
  );
}

export default App;
