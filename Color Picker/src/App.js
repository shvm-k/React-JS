import React from 'react';
import './App.css';
import ColorPicker from './Colorpicker';

function App() {
  const colors = [
    '#CF0606',
    '#07ED1E',
    '#073DED',
    '#E9ED07',
    '#ED07ED',
    '#07EDE9',
    '#FAA716',
    '#912766',
    '#F57842',
    '#164266',
  ];

  return (
    <div id="root" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="container-lg mt-1 px-5" style={{ textAlign: 'center' }}>
        <h2 className="pt-5 fw-bolder">Color Picker</h2>
        <div className="container-lg mt-3 border" style={{
          backgroundColor: 'rgba(252, 208, 199, 0.7)',
          height: '550px',
          borderRadius: '20px',
          boxShadow: '2px 2px 8px black',
          width: '90%', // Adjust the width as needed
        }}>
          <div className="d-flex justify-content-center align-items-center my-5">
            <ColorPicker colors={colors} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

