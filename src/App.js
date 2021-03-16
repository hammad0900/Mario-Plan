import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Layouts/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import ProjectDetails from './components/Projects/ProjectDetails'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import CreateProject from './components/Projects/CreateProject'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/project/:id" component={ProjectDetails}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/create" component={CreateProject}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
