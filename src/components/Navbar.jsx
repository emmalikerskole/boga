import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { label: "Eksempel 1", to: "/1" },
  { label: "Eksempel 2", to: "/2" },
  { label: "Eksempel 3", to: "/3" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink to={link.to} className="navbar-link">
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}