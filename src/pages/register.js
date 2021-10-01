import React from 'react'
import { Link } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import SignupFormSucess from './SignupFormSucess';
import Form from '../components/form'



 const Form = () => {
    return (
        <>
        <nav className="register">
             <Link to={Form}></Link> 
        </nav>
         </>
       
    );
}
