
import React, { useState, useEffect } from 'react';
import validation from './validation';
import { useAuth0 } from '@auth0/auth0-react';

const Login = ({ submitForm }) => {
    const  [values, setValues] = useState({
        fullname: "",
        email:"",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    const handleFormSubmit = (event) =>{
      event.preventDefault();
       const username = document.getElementById("txt-fullname").value;
       const password = document.getElementById("txt-password").value;
        const requestUrl = "http://localhost:4000/login/?username="+username+"&password="+password;

        fetch(requestUrl, {
            method: 'GET',
            headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
            }
        })
        .then(response => { return response.json();})
        .then(responseData => {
            
            
            console.log(responseData); 
            if(!responseData.hadError){
                window.location = '/PlayerProfile';
            } else {
                alert('password is incorrect')
            }
        
        
        
        })




        .then(data => {this.setState({"questions" : data});})
    
        .catch(err => {
            console.log("fetch error" + err);
        });
    }
    
    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }

        
    }, [errors]);
        
    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Log In</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label classname="label">Full Name</label>
                        <input className="input" 
                        type="text" 
                        name="fullname" 
                        id = "txt-fullname"
                        value={values.fullname}
                        onChange={handleChange}
                        />
                        {errors.fullname && <p className="error">{errors.fullname}</p>}
                    </div>
                    <div className="email">
                        <label classname="label">Email</label>
                        <input className="input" 
                        type="email"  
                        name="email" 
                        id = "txt-email"
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label classname="label">Password</label>
                        <input className="input" 
                        type="password" 
                        name="password" 
                        id = "txt-password"
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>
                            Log In
                            </button> 
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

