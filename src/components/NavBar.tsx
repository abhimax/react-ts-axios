import React from "react";
import {Link} from 'react-router-dom';
interface IProps{}
interface IStates{}
let About: React.FC<IProps> = () => {
    return <nav className="navbar navbar-expand-lg bg-dark mb-4">
      <div className="container">
      <Link to={'/'} className="navbar navbar-brand text-white"> React Router</Link>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link text-white">Home</Link>
            </li>
            <li className="nav-item text-white">
                <Link to="/about" className="nav-link text-white">About</Link>
            </li>
        </ul>
      </div>
      </div>

  </nav>
}
export default About;