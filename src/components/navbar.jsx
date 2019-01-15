import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class Navbar extends Component {
  render(){
    return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">My First React App</a>
      <button type="button" class="btn btn-primary">a btn That Make absolutely nothing</button>

    </nav>
    )

  }
}
export default  Navbar;
