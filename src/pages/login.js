import React from 'react'
import { Link } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import SignupFormSucess from './SignupFormSucess';
import Form from '../components/form';
import Login from '../components/login';



 const Login = () => {
    return (
        <>
        <nav className="register">
             <Link to={Login}></Link> 
        </nav>
         </>
       
    );
}