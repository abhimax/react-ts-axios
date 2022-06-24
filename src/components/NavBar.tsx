import React from "react";
import {Link} from 'react-router-dom';
interface IProps{}
interface IStates{}
let About: React.FC<IProps> = () => {
    return <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
      <Link to={'/'} className="navbar navbar-brand text-white"> React Router</Link>

      </div>

  </nav>
}
export default About;