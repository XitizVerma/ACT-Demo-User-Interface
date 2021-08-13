import React from 'react';
import {Route, Switch} from "react-router-dom";

import './components/index.css';

import reducer, {initState} from './components/Context/reducer.jsx'
import { StateProvider } from './components/Context/StateProvider.jsx';
import DigitalLibrary from './components/Digital Library.jsx';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';
import Student from './components/Student.jsx';
import Borrow from './components/Borrow.jsx';


function App() {
  return (
          <>
            <StateProvider reducer={reducer} initState={initState}>
              <Switch>
                <Route exact path="/" component={DigitalLibrary}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/admin' component={Admin}></Route>
                <Route exact path="/borrow" component={Borrow} />
                <Route exact path="/student" component={Student} />
              </Switch>
            </StateProvider>
          </>
  );
}

export default App;
