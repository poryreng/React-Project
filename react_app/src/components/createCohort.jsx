import React, { useState } from 'react';

const CohortForm = () => {
  const [cohortDetails, setCohortDetails] = useState({
    id: '',
    year: '',
    degree: 'http://127.0.0.1:8000/api/degree// ',
    name: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCohortDetails({ ...cohortDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://127.0.0.1:8000/api/cohort/', {
      method: 'POST',
      body: JSON.stringify(cohortDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Cohort details submitted successfully');
        } else {
          throw new Error('Failed to submit cohort details');
        }
      })
      .catch((error) => {
        console.error('Error occurred while submitting cohort details:', error);
        alert('Error occurred while submitting cohort details. Please try again later.');
      });
  };

  return (
    <div className="container">
      <h2>Create Cohort</h2>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                className="form-control"
                id="id"
                name="id"
                value={cohortDetails.id}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="year">Year:</label>
              <input
                type="number"
                className="form-control"
                id="year"
                name="year"
                value={cohortDetails.year}
                max={4}
                min={1}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="degree">Degree:</label>
              <input
                type="text"
                className="form-control"
                id="degree"
                name="degree"
                value={cohortDetails.degree}
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

export default CohortForm;

