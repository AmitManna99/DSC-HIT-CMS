import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import CreateProject from './components/projects/CreateProject'
import CreateEvent from './components/events/CreateEvent'
import CreateResource from './components/resources/CreateResource'
import CreateMember from './components/team/CreateMember'
import M from 'materialize-css'

class App extends Component {

  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, { edge: 'right' });
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/add-project' component={CreateProject} />
            <Route path='/add-member' component={CreateMember} />
            <Route path='/add-event' component={CreateEvent} />
            <Route path='/add-resource' component={CreateResource} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;