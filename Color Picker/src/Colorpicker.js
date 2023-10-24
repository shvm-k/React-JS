import React, { useState } from 'react';
import './Colorpicker.css';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
  };

  return (
    <div className="color-picker">
      <button
        id="clickButton"
        className={`color-button ${selectedColor ? 'selected-color-button' : ''}`}
        style={{
          backgroundColor: selectedColor,
        }}
        onClick={toggleColorList}
      >
        {selectedColor ? 'Pick a color' : 'Pick a color'}
      </button>
      {isColorListVisible && (
        <div className="color-list">
          {colors.slice(0, 10).map((color, index) => (
            <button
              key={index}
              className="color-swatch"
              style={{
                backgroundColor: color,
              }}
              onClick={() => handleColorClick(color)}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
