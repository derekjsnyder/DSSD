import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header__logo-box">
                <img src="img/logo.jpg" alt="Logo" className="header__logo"/>
          </div>
          <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Derek Snyder</span>
                    <span className="heading-primary--sub">Portfolio</span>
                </h1>

                <a href="#section-tours" className="btn btn--white btn--animated">Portfolio</a>
            </div>
        </header>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));