import React from "react";
interface IProps{}
interface IStates{}
let NavBar: React.FC<IProps> = () => {
    return <nav className="navbar navbar-expand-lg bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
        </ul>
  </nav>
}
export default NavBar;