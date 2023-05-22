import React, { useState } from 'react';

const StudentForm = () => {
  const [studentDetails, setStudentDetails] = useState({
    student_id: '',
    first_name: '',
    last_name: '',
    cohort: 'http://127.0.0.1:8000/api/cohort/',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudentDetails({ ...studentDetails, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://127.0.0.1:8000/api/student/', {
      method: 'POST',
      body: JSON.stringify(studentDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Student details submitted successfully');
        } else {
          throw new Error('Failed to submit Student details');
        }
      })
      .catch((error) => {
        console.error('Error occurred while submitting student details:', error);
        alert('Error occurred while submitting student details. Please try again later.');
      });
  };

  return (
    <div className="container">
        <h2>Create Student</h2>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="student_id">Student ID:</label>
              <input
                type="text"
                className="form-control"
                id="student_id"
                name="student_id"
                value={studentDetails.student_id}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="first_name">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                name="first_name"
                value={studentDetails.first_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="last_name">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                name="last_name"
                value={studentDetails.last_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="cohort">Cohort:</label>
              <input
                type="text"
                className="form-control"
                id="cohort"
                name="cohort"
                value={studentDetails.cohort}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
