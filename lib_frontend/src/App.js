import React, { Component } from "react";
import logo from "./Components/Homedetails/logog.png"; // with import
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import history from "./history";
import "./App.css";
import Swal from "sweetalert2";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
// import Homedetails from "./Components/Homedetails/Homedetails";

import Footer from "./Components/Footer/Footer";
import OnImagesLoaded from "react-on-images-loaded";
import { GoogleLogin, GoogleLogout } from "react-google-login";
// import Printer from "./Components/Printer/Printer.js";
// import Teampage from "./Components/Teampage/Teampage.js";
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      isSigned: false,
      isAdmin: false,
      email: "",
      tokenId: "",
      authRes: "",
      expanded: false,
    };
    // eslint-disable-next-line no-func-assign
  }

  render() {
    let styles = {
      zIndex: 10,
    };
    return (
      <div>
        <Navbar
          expanded={this.state.expanded}
          collapseOnSelect
          expand="lg"
          variant="light"
          className="NavBar"
        >
          <NavLink to="" style={styles}>
            <img src="" className="logonav" alt="Lib Management Project" />
          </NavLink>

          <Navbar.Toggle
            onClick={() => {
              if (this.state.expanded === "expanded")
                this.setState({ expanded: false });
              else this.setState({ expanded: "expanded" });
            }}
            aria-controls="responsive-navbar-nav"
          />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="NavBar navbar-toggle"
          >
            <Nav className="navbar-collapse justify-content-end">
              {/* Admin ----> next week */}

              {/* Profile Link ----->(Nir) */}

              {/* Home Link -----> Omkar */}

              {/* Team Link ---> Harish */}

              {/* Print Link ----> Pratik */}
            </Nav>

            {/* Google Authentication */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Error = () => {
    const handleClose = () => setError("", false);

    return (
      <>
        <Modal show={this.props.showError} onHide={handleClose}>
          <Modal.Header className="errorheader">
            <i className="material-icons erroricon">error_outline</i>
          </Modal.Header>

          <Modal.Body>
            <div className="ooops">Ooops!</div>
            <h6 className="error">{this.props.msg}</h6>
          </Modal.Body>

          <Button
            variant="secondary"
            className="errorclose"
            onClick={handleClose}
          >
            Close
          </Button>
          <br />
        </Modal>
      </>
    );
  };
  render() {
    return <div>{this.Error()}</div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      showError: false,
      showAccount: false,
      showImages: false,
      currenttab: "/",
      isSigned: false,
      isAdmin: false,
      tokenId: "",
      emailid: "",
    };
    // eslint-disable-next-line no-func-assign
    setInfo = setInfo.bind(this);
    // eslint-disable-next-line no-func-assign
    setError = setError.bind(this);
    // eslint-disable-next-line no-func-assign
    setShowAccount = setShowAccount.bind(this);
  }

  render() {
    return (
      <OnImagesLoaded
        onLoaded={() => {
          this.setState({ showImages: true });
          this.props.hideLoader();
        }}
        onTimeout={() => {
          this.setState({ showImages: true });
          this.props.hideLoader();
        }}
        timeout={7000}
      >
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
          <NavBar loginState={this.state.loginState} />
          <Switch>
            {/* root route (omkar) */}
            {/* printmg route */}
            {/* team route */}
          </Switch>
          <Error msg={this.state.error} showError={this.state.showError} />
          <Footer style={{ opacity: this.state.showImages ? 1 : 0 }} />
        </Router>
      </OnImagesLoaded>
    );
  }
}

function setError(val, state) {
  this.setState({ showError: state });
  this.setState({ error: val });
}
function setShowAccount(val) {
  this.setState({ showAccount: val });
}
function setInfo(val) {
  this.setState({
    tokenId: val.tokenId,
    isAdmin: val.isAdmin,
    isSigned: val.isSigned,
    emailid: val.email,
  });
  console.log(this.state.emailid);
}

export default withRouter(App);
// export  App, showModel, fetchDetails };
