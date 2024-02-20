import React, { useState } from 'react';
import Color from './Color';
import ColorPicker from './ColorPicker';

const ColorPaletteItem = ({ color, onRemove }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedColor, setSelectedColor] = useState(color);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor.hex);
  };

  const handleColorChangeComplete = () => {
    setIsEditing(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isEditing ? (
        <ColorPicker color={selectedColor} onChange={handleColorChange} onChangeComplete={handleColorChangeComplete} />
      ) : (
        <Color color={selectedColor} />
      )}
      {isHovered && (
        <button onClick={onRemove}>❌</button>
      )}
      {!isEditing && (
        <button onClick={handleEditClick}>✏️</button>
      )}
    </div>
  );
};

export default ColorPaletteItem;
