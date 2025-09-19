import React from "react";
import { Link } from "react-router-dom"; // remove if you don't use react-router
import "./Navbar.css"; // import the CSS file

type NavbarProps = {
  brand?: string;
  links: { name: string; path: string }[];
};

type NavbarState = {
  isOpen: boolean;
};

export default class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { brand = "Aaron Honjaya", links } = this.props;
    const { isOpen } = this.state;

    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="/imgs/cseLogo.png" alt="Logo" className="navbar-logo" />
          {/* {brand} */}
          <span>{brand}</span>

        </div>

        {/* Hamburger button for mobile */}
        <button className="navbar-toggle" onClick={this.toggleMenu}>
          ☰
        </button>

        {/* Links */}
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="navbar-link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
