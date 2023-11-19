import React, { useState } from 'react';
import "./App.css";

const EmployeeForm = ({ formConfig }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {
    // Send the form data to the server upon submission
    // This is a simplified example, you would likely use an API request here
  };

  return (
    <div>
      {/* Render the form based on the form configuration */}
      {formConfig.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          {field.type === 'text' && (
            <input
              type="text"
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
          {/* Add other types of form fields based on your requirements */}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EmployeeForm;
