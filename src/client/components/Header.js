import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/yourLogoutEndpoint">Logout</a>
  ) : (
    <a href="/yourSigninEndpoint">Login</a>
  );
  return (
    <nav>
      <div>
        <Link to="/">Home page logo</Link>
        <ul>
          <li>
            <Link to="/Example1Endpoint">Example1</Link>
          </li>
          <li>
            <Link to="/Example2Endpoint">Example2</Link>
          </li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(Header);
