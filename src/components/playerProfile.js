import React from 'react';
// import React, { useState, useEffect } from 'react';
import validation from './validation';

const playerProfile = ({playerProfile}) => {
    // const  [values, setValues] = useState({
    //     firstName: "",
    //     lastName:"",
    //     school: "",
    // });

    // const [errors, setErrors] = useState({});
    // const [dataIsCorrect, setDataIsCorrect] = useState(false);
    // const handleChange = (event) => {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value,
    //     })
    // }
    // const handleFormSubmit = (event) =>{
    //     event.preventDefault();
    //     setErrors(validation(values));
    //     setDataIsCorrect(true);
    // };
    
    // useEffect(() => {
    //     if (Object.keys(errors).length === 0 && dataIsCorrect) {
    //         submitForm(true);
    //     }
    // }, [errors]);

  return (
    <form>
      <div className="playerInfo">
        <label>First Name</label>
        <input
          type="text"
          className="firstName"
        //   value={values.firstName}
        //   onChange={handleChange}
          placeholder="Enter first name"
        ></input>
        <label>Last Name</label>
        <input
          type="text"
          className="lastName"
          placeholder="Enter last name"
        ></input>
        <label>School</label>
        <input
          type="text"
          className="school"
          placeholder="School Attending/Attended"
        ></input>
        <label>Position</label>
        <input type="text"
        className="postion"
        placeholder="Main Position"
        ></input>
        <label>Height</label>
        <input type="text"
        className="height"
        placeholder="Numerical number"
        ></input>
        <label>Weight</label>
        <input type="text"
        className="weight"
        placeholder="Numerical number"
        ></input>
        <label>Jersey Number</label>
        <input type="number"
        className="jersey number"
        ></input>
        <label>School Address</label>
        <input type="text"
        className="school address"
        placeholder="Full address"
        ></input>
        <label>Coaches Name</label>
        <input type="text"
        className="coaches name"
        placeholder="First and Last Name"
        ></input>
        <label>Coaches Phone Number</label>
        <input type="text"
        className="coaches phone number"
        placeholder="xxx-xxx-xxxx"></input>
        <label>Coaches Email Address</label>
        <input type="text"
        className="coaches email"
        placeholder="xxxx@email.com"
        ></input>
        <label>Home Address</label>
        <input type="text"
        className="home address"
        placeholder="Street Address, City and State"
        ></input>
        <label>Personal Cell Number</label>
        <input type="text"
        className="personal cell number"
        placeholder="xxx-xxx-xxxx"
        ></input>
        <label>Email</label>
        <input type="email"
        className="email"

        placeholder="xxxx@email.com"
        ></input>
        <label>Previous Year Stats</label>
        <input type="text"
        className="previous year stats"
        placeholder="pts, rbs, stls, ast, etc"
        ></input>
        <label>GPA</label>
        <input type="text"
        className="gpa"
        placeholder="Grade Point Average"
        ></input>
        <label>Graduation Year</label>
        <input type="text"
        className="graduation year"
        placeholder="Year"></input>
        <label>Place Video Links Here</label>
        <input type="text"
        className="video link"
        placeholder="Provide link"
        ></input>
      </div>
    </form>
  );
};

export default playerProfile;
