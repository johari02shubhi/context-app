// App.js
import React from 'react';
import { ThemeProvider } from './components/themeContext';
import ThemedComponent from './components/themedComponet';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Toggle</h1>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
