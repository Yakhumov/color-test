import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addColor, removeColor } from '../redux/reducer';
import ColorPaletteItem from './ColorPaletteItem';

const ColorPalette = () => {
  const colors = useSelector(state => state.colors);
  const dispatch = useDispatch();

  const handleAddColor = () => {
    dispatch(addColor('black')); 
  };

  const handleRemoveColor = (index) => {
    dispatch(removeColor(index));
  };

  return (
    <div>
      <button onClick={handleAddColor}>Добавить цвет</button>
      {colors.map((color, index) => (
        <ColorPaletteItem key={index} color={color} onRemove={() => handleRemoveColor(index)} />
      ))}
    </div>
  );
};

export default ColorPalette;
