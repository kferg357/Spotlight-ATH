<<<<<<< HEAD
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
=======
// import React from 'react';
import React, { useState, useEffect } from "react";
import validation from "./validation";
import { BrowserRouter } from 'react-router-dom';

const PlayerProfile = ({ submitForm }) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    school: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // const firstName = document.getElementById("txt-firstName").value;
    //    const lastName = document.getElementById("txt-lastName").value;
    setErrors(validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);
>>>>>>> ec6591ebee4a2c209c10dccd3a48ba556b6b8a25

  return (
    <div className="container">
      <div className="app-wrapper">
        <form className="form-wrapper">
          <div className="playerInfo">
            <label className="label">First Name</label>
            <input
              className="input"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          <div className="lastName">
            <label className="label">Last Name</label>
            <input
              className="input"
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
            />

            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>

          <div className="school">
            <label className="label">School</label>
            <input
              className="input"
              type="text"
              name="school"
              value={values.school}
              onChange={handleChange}
              placeholder="School Attending/Attended"
            />
            {errors.school && <p className="error">{errors.school}</p>}
          </div>

          <div className="position">
            <label className="label">Position</label>
            <input
              className="input"
              type="text"
              name="position"
              value={values.position}
              onChange={handleChange}
              placeholder="Main Position"
            />
            {errors.position && <p className="error">{errors.position}</p>}
          </div>

          <div className="height">
            <label className="label">Height</label>
            <input
              className="input"
              type="text"
              name="height"
              value={values.height}
              onChange={handleChange}
              placeholder="Numerical number"
            />
            {errors.height && <p className="error">{errors.height}</p>}
          </div>

          <div className="weight">
            <label className="label">Weight</label>
            <input
              className="input"
              type="text"
              name="weight"
              value={values.weight}
              onChange={handleChange}
              placeholder="Numerical number"
            />
            {errors.weight && <p className="error">{errors.weight}</p>}
          </div>

          <div className="jersey number">
            <label className="label">Jersey Number</label>
            <input
              className="input"
              type="number"
              name="jersey number"
              value={values.jerseynumber}
              onChange={handleChange}
            />
            {errors.jerseynumber && (
              <p className="error">{errors.jerseynumber}</p>
            )}
          </div>

          <div className="school address">
            <label className="label">School Address</label>
            <input
              className="input"
              type="text"
              name="school address"
              value={values.schooladdress}
              onChange={handleChange}
              placeholder="Full address"
            />
            {errors.schooladdress && (
              <p className="error">{errors.schooladdress}</p>
            )}
          </div>

          <div className="coaches name">
            <label className="label">Coaches Name</label>
            <input
              className="input"
              type="text"
              name="coaches name"
              value={values.coachesname}
              onChange={handleChange}
              placeholder="First and Last Name"
            />
            {errors.coachesname && (
              <p className="error">{errors.coachesname}</p>
            )}
          </div>

          <div className="coaches phone number">
            <label className="label">Coaches Phone Number</label>
            <input
              className="input"
              type="text"
              name="coaches phone number"
              value={values.coachesphonenumber}
              onChange={handleChange}
              placeholder="xxx-xxx-xxxx"
            />
            {errors.coachesphonenumber && (
              <p className="error">{errors.coachesphonenumber}</p>
            )}
          </div>

          <div className="coaches email address">
            <label className="label">Coaches Email Address</label>
            <input
              className="input"
              type="email"
              name="coaches email"
              value={values.coachesemailaddress}
              onChange={handleChange}
              placeholder="Email"
            />
            {errors.coachesemailaddress && (
              <p className="error">{errors.coachesemailaddress}</p>
            )}
          </div>

          <div className="home address">
            <label className="label">Home Address</label>
            <input
              className="input"
              type="text"
              name="home address"
              value={values.homeaddress}
              onChange={handleChange}
              placeholder="Street Address, City and State"
            />
            {errors.homeaddress && (
              <p className="error">{errors.homeaddress}</p>
            )}
          </div>

          <div className="personal cell number">
            <label className="label">Personal Cell Number</label>
            <input
              className="input"
              type="text"
              cname="personal cell number"
              value={values.personalcellnumber}
              onChange={handleChange}
              placeholder="xxx-xxx-xxxx"
            />
            {errors.personalcellnumber && (
              <p className="error">{errors.personalcellnumber}</p>
            )}
          </div>

          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="xxxx@email.com"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="previous year stats">
            <label className="label">Previous Year Stats</label>
            <input
              className="input"
              type="text"
              name="previous year stats"
              value={values.previousyearstats}
              onChange={handleChange}
              placeholder="pts, rbs, stls, ast, etc"
            />
            {errors.previousyearstats && (
              <p className="error">{errors.previousyearstats}</p>
            )}
          </div>

          <div className="GPA">
            <label className="label">GPA</label>
            <input
              className="input"
              type="text"
              name="gpa"
              value={values.gpa}
              onChange={handleChange}
              placeholder="Grade Point Average"
            />
            {errors.gpa && <p className="error">{errors.gpa}</p>}
          </div>

          <div className="graduation year">
            <label className="label">Graduation Year</label>
            <input className="input"
              type="text"
              name="graduation year"
              value={values.graduationyear}
              onChange={handleChange}
              placeholder="Year"
            />
            {errors.graduationyear && <p className="error">{errors.graduationyear}</p>}
          </div>

          <div className="video link">
            <label className="label">Place Video Links Here</label>
            <input className="input"
              type="link"
              name="video link"
              value={values.videolink}
              onChange={handleChange}
              placeholder="Provide link"
            />
            {errors.videolink && <p className="error">{errors.videolink}</p>}
          </div>

          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>


  );
};

export default PlayerProfile;
