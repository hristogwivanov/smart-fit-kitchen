import React from 'react';
import './MealItem.css';

const MealItem = ({ meal }) => {
  return (
    <div className="meal-item">
      <h2>{meal.name}</h2>
      <p>{meal.description}</p>
      <p>{meal.price}</p>
    </div>
  );
};

export default MealItem;