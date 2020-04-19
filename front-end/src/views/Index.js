/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
class Index extends React.Component {
  state = {
    user: {}
  }

  constructor() {
    super();
    this.fetchUserDetails = this.fetchUserDetails.bind(this);
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  fetchUserDetails (details) {
    this.setState({
      user: details
    });
  }

  render() {
    return (
      <>
        <DemoNavbar userDetails={this.fetchUserDetails} />
        <main ref="main">
          <Hero fetchUserDetails = { this.state.user } />
        </main>
      </>
    );
  }
}

export default Index;
