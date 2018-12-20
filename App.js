import React from "react";
import ReactDOM from "react-dom";

import SnowyImage from './img/snowy.jpg'
import Snowboarding from './img/snowboarding.jpg';
import Logo from './img/logo.jpg';
import powderDay from './img/powderDay.jpg';
import DJ from './img/DJ.jpg';


class App extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header__logo-box">
                <img src={Logo} alt="Logo" className="header__logo"/>
          </div>
          <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Derek<span className="heading-primary--main--sub">Snyder</span></span>
                    <span className="heading-primary--sub">Portfolio</span>
                </h1>

                {/* <a href="#section-tours" className="btn btn--white btn--animated">Portfolio</a> */}
            </div>
        </header>
        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        <span className="">Adventurer</span> by heart <span className="">Developer</span> by trade
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                            ducimus quam nisi exercitationem omnis earum qui.
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                        </p>

                        <a href="#" className="btn-text">Learn more &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={DJ} alt="Photo 1" className="composition__photo composition__photo--p1"/>
                            <img src={Snowboarding} alt="Photo 2" className="composition__photo composition__photo--p2"/>
                            <img src={powderDay} alt="Photo 3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));