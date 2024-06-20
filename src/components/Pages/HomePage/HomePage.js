import React from 'react';
import Header from '../../Sections/Header/Header';

const HomePage = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Smart Fit Kitchen</h1>
        <p className="lead">Healthy meals delivered to your door.</p>
      </div>
      <Header />
    </div>
  );
};

export default HomePage;
