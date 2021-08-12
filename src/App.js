import './components/index.css';
import React, {useState} from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import DigitalLibrary from './components/Digital Library.jsx';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';
import Student from './components/Student.jsx';
import Borrow from './components/Borrow.jsx';

function App() {
  const [borrowlist,updateBorrowList]= useState([]);
  return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={DigitalLibrary}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/admin' component={Admin}></Route>
          <Route exact path="/student" >
            <Student borrowlist = {borrowlist} updateBorrowList={updateBorrowList}/>
          </Route>
          <Route exact path="/borrow" >
            <Borrow borrowlist={borrowlist}/>
          </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
