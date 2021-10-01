// import React, { useState } from 'react'
// import SignupForm from './SignupForm';
// import SignupFormSucess from './SignupFormSucess';

// const Login = () => {
//     const [formIsSubmitted, setFormIsSubmitted] = useState(false);

//     const submitForm = () => {
//         setFormIsSubmitted(true);
//     }
//     return <div>{!formIsSubmitted ? <SignupForm submitForm={submitForm} /> : <SignupFormSucess />}</div>
// };

// export default Login;




import React, { useState, useEffect } from 'react';
import validation from './validation';

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
        setErrors(validation(values));
        setDataIsCorrect(true);
    };
    
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

