
import React from 'react';
import Form from "./components/form";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages'
import Register from './pages'
import SignupForm from './components/SignupForm';
import Login from './components/Login';
import SearchBar from './components/SearchBar';
import PlayerProfile from './components/PlayerProfile';






const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" exact component={Home} />
      <Route path="/register" component={Form} /> 
      <Route path="/login" component={Login} /> 
      {/* <Route path="" component={Login} />  */}
      <Route path="/SearchBar" component={SearchBar} />
      <Route path="/playerProfile" component={PlayerProfile} />
        
      {/* </Route> */}
    </Switch>
    </BrowserRouter>
  </>
  );
}
  {/* ( <div>
    <Form />
  </div>
  );
}; */}

export default App;
