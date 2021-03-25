import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import ViewCollections from './components/View-Collections/View-Collections';
import CreateCollection from './components/Create-Collection/Create-Collection';
import CreateUser from './components/Create-User/Create-User';
import EditCollections from './components/Edit-Collections/Edit-Collections';
import AddtoCollection from './components/Add-to-Collection/Add-to-Collection';

class App extends React.Component {

  render () {
    return (
      <Router className="container">
        <Navbar />
        <Route path="/" exact component={ViewCollections} />
        <Route path="/edit" component={EditCollections} />
        <Route path="/create" component={CreateCollection} />
        <Route path="/add" component={AddtoCollection} />
      </Router>
    );
  }
}

export default App;