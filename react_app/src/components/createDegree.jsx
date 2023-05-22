import React, { useState } from 'react';

    const DegreeForm = () => {
      const [degreeDetails, setDegreeDetails] = useState({
        full_name: '',
        shortcode: '',
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDegreeDetails({ ...degreeDetails, [name]: value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://127.0.0.1:8000/api/degree/', {
          method: 'POST',
          body: JSON.stringify(degreeDetails),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (response.ok) {
              console.log('Degree details submitted successfully');
            } else {
              console.error('Failed to submit degree details');
            }
          })
          .catch((error) => {
            console.error('Error occurred while submitting degree details:', error);
          });
      };

      return (
<div class="container">
  <h2>Create Degree</h2>
  <div class="card">
    <div class="card-body">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="full_name">Name:</label>
          <input
            type="text"
            class="form-control"
            id="full_name"
            name="full_name"
            value={degreeDetails.full_name}
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group mt-2">
          <label for="shortcode">Shortcode:</label>
          <input
            type="text"
            class="form-control"
            id="shortcode"
            name="shortcode"
            value={degreeDetails.shortcode}
            onChange={handleInputChange}
          />
        </div>
        <div class="mt-3">
          <button type="submit" class="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  </div>
</div>




      );
    };

export default DegreeForm;
