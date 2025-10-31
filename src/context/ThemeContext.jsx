import React, { createContext, useState, useEffect, useContext } from 'react';

/**
 * Creates a new React Context for managing the theme.
 */
const ThemeContext = createContext();

/**
 * This component provides the theme (e.g., 'light' or 'dark') and a function
 * to toggle it to all child components.
 */
export const ThemeProvider = ({ children }) => {
  
  // 1. Initialize state.
  // We check localStorage for a saved theme. If not found, default to 'light'.
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  // 2. Use an effect to apply the theme to the root <html> element.
  // This effect runs whenever the 'theme' state changes.
  useEffect(() => {
    // Set the data-theme attribute (e.g., <html data-theme="dark">)
    // Your index.css file will use this attribute to apply the correct colors.
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save the user's preference in localStorage for future visits.
    localStorage.setItem('theme', theme);
  }, [theme]); // Only re-run this effect if the 'theme' variable changes.

  // 3. Create a function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 4. Provide the current theme and the toggle function to all children.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * A custom hook (useTheme) to make it easy to access the theme state
 * and toggle function from any other component.
 */
export const useTheme = () => useContext(ThemeContext);

