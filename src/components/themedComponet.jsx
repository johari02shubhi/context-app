import React from 'react';
import { useTheme } from './themeContext';

const ThemedComponent = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  const themeStyles = {
    backgroundColor: isDarkTheme ? '#333' : '#fff',
    color: isDarkTheme ? '#fff' : '#333',
    padding: '20px',
    margin: '10px',
  };

  return (
    <div style={themeStyles}>
      <h2>Hello World!</h2>
      <p>Content is styled based on the current theme.</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemedComponent;
