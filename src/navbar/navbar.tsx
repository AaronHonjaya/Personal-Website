import React from "react";
import { Link } from "react-router-dom"; // remove if you don't use react-router
import "./Navbar.css"; // import the CSS file

type NavbarProps = {
  brand?: string;
  links: { name: string; path: string }[];
  activeSection?: string;
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
    const { brand = "Aaron Honjaya", links, activeSection } = this.props;
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
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          {links.map((link) => {
            const isHash = link.path.startsWith("#");

            // For hash-links, use <a> and optional JS scroll for consistent behavior
            if (isHash) {
              return (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className={`navbar-link ${link.name.toLowerCase() === activeSection ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();                    // prevent jump
                      const el = document.querySelector(link.path);
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                      // Optionally update the hash in the URL:
                      history.replaceState(null, "", link.path);
                      this.setState({ isOpen: false });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            }

            // For real routes, use <Link>
            return (
              <li key={link.name}>
                <Link to={link.path} className="navbar-link" onClick={() => this.setState({ isOpen: false })}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
