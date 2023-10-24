import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css'; // Add your custom CSS for styling

const AgeCalculator = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [age, setAge] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const calculateAge = () => {
    if (selectedDate) {
      const birthDate = new Date(selectedDate);
      const today = new Date();
      const ageInMilliseconds = today - birthDate;
      const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
      setAge(ageInYears);
    }
  };

  return (
    <div className="age-calculator-container">
      <h2>Age Calculator</h2>
      <div className="date-picker">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>Your age is {age} years</p>}
    </div>
  );
};

export default AgeCalculator;

