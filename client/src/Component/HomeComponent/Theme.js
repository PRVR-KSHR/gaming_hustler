import React, { useState } from 'react';

function Theme() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`theme ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <h1>My Website</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main>
        {/* Your website content goes here */}
      </main>
    </div>
  );
}

export default Theme;
