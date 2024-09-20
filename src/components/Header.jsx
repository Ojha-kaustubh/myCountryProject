// import React from 'react';

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="title">
          <h2>
            <a href="/">Where is My Country</a>
          </h2>
        </div>
        <p className="theme-changer">
          <i className="fa-regular fa-moon" />
          &nbsp;&nbsp;Dark Mode
        </p>
      </div>
    </header>
  );
};
