import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  return (
    <div className="container">
      <div className="jumbotron">
      <i class="fal fa-search"></i>
      <i className="fas fa-search"></i>
      <img src='assets/images/SFKlogo.png' className='logo' alt="Smart Fit Kitchen logo"></img>
      </div>
    </div>
    // <Header>
    //   <div className="container">
        
    //   </div>
    // </Header>
  );
};

export default Header;