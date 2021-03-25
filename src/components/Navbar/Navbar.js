
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Yelp Collections Clone</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">View Collections</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Collection</Link>
          </li>
          <li className="navbar-item">
          <Link to="/add" className="nav-link">Add Place to Collection</Link>
          </li>
          <li className="navbar-item">
          <Link to="/edit" className="nav-link">Delete Collections</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}