import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          //
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));