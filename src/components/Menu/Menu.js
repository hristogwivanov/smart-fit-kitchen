import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase/firebase';
import MealItem from './MealItem';
import './Menu.css';

const Menu = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await firestore.collection('meals').get();
      setMeals(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <div className="menu">
      <h1>Menu</h1>
      {meals.map(meal => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

export default Menu;
