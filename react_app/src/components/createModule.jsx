import React, { useState } from 'react';

const ModuleForm = () => {
  const [moduleDetails, setModuleDetails] = useState({
    code: '',
    full_name: '',
    delivered_to: [''],
    ca_split: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'delivered_to') {
        const deliveredToArr = value.split(',').map(item => item.trim());
        setModuleDetails({ ...moduleDetails, [name]: deliveredToArr });
      } else {
        setModuleDetails({ ...moduleDetails, [name]: value });
      }
    };


  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://127.0.0.1:8000/api/module/', {
      method: 'POST',
      body: JSON.stringify(moduleDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Module details submitted successfully');
        } else {
          throw new Error('Failed to submit module details');
        }
      })
      .catch((error) => {
        console.error('Error occurred while submitting module details:', error);
        alert('Error occurred while submitting module details. Please try again later.');
      });
  };

  return (
    <div className="container">
      <h2>Create Module</h2>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="code">Module Code:</label>
              <input
                type="text"
                className="form-control"
                id="code"
                name="code"
                value={moduleDetails.code}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="full_name">Module Name:</label>
              <input
                type="text"
                className="form-control"
                id="full_name"
                name="full_name"
                value={moduleDetails.full_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="delivered_to">Delivered to:</label>
              <textarea
                className="form-control"
                id="delivered_to"
                name="delivered_to"
                value={moduleDetails.delivered_to.join(', ')}
                onChange={handleInputChange}
            />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="ca_split">CA Split</label>
              <input
                type="number"
                className="form-control"
                id="ca_split"
                name="ca_split"
                value={moduleDetails.ca_split}
                onChange={handleInputChange}
                max={100}
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

export default ModuleForm;
