import React, { useState } from 'react';

const GradeForm = ({ GradeID }) => {
  const [GradeDetails, setGradeDetails] = useState({
    ca_mark: '',
    exam_mark: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGradeDetails({ ...GradeDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!GradeID) {
      console.error('GradeID is null or undefined');
      return;
    }

    // PATCH request to update Grade details
    fetch(`http://127.0.0.1:8000/api/grade/${GradeID}/`, {
      method: 'PATCH',
      body: JSON.stringify(GradeDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Grade details submitted successfully');
        } else {
          console.error('Failed to submit Grade details');
        }
      })
      .catch((error) => {
        console.error('Error occurred while submitting Grade details:', error);
      });
  };

  return (
    <div className="container">
      <h2>Update Grade</h2>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="ca_mark">Continuous Assessment Mark:</label>
              <input
                type="number"
                name="ca_mark"
                className="form-control text-center"
                value={GradeDetails.ca_mark}
                onChange={handleInputChange}
                max={100}
                min={0}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="exam_mark">Final Exam Mark: </label>
              <input
                type="number"
                name="exam_mark"
                className="form-control text-center"
                value={GradeDetails.exam_mark}
                onChange={handleInputChange}
                max={100}
                min={0}
              />
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GradeForm;
