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

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import queryString from 'query-string';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';

const override = css`
  display: block;
  margin: 0 auto;
`;

class Hero extends React.Component {

  state = {
    loading: false,
    user: {}
  }
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { fetchUserDetails: user } = this.props;

    if (user !== this.state.user) {
      this.setState({
        user
      });
    }
  }

  async componentDidMount() {
    this.authenticate();
  }

  async authenticate() {
    const search = window.location.search,
      params = queryString.parse(search);

    if (Object.keys(params).length > 0) {
      const { code = "" } = params;

      if (code === "") {
        toast.error("You can't move forward without logging in");
      } 
    }
  }
 
  render() {
    return (
      <>
        <div className="position-relative">
          <ToastContainer />
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col lg="12" md="12" sm = "12">
                    <div className="sweet-loading">
                      <ClipLoader
                        css={override}
                        size={50}
                        loading={this.state.loading}
                      />
                    </div>
                  </Col>
                  <Col className="text-center" lg="6">
                  
                    <p className="lead text-white">
                      { Object.keys(this.state.user).length === 0 ? 'If you press the login button on the top right corner, it will Ask your facebook Username and Password. Then it will show your user details here in facebook' : `Hi ${this.state.user.profile.name.givenName} ${this.state.user.profile.name.familyName}, you are now Logged in...!` }
                    </p>
                    <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        *Template Credits to
                      </small>
                      <img
                        alt="..."
                        className="ml-1"
                        style={{ height: "28px" }}
                        src={require("assets/img/brand/creativetim-white-slim.png")}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
