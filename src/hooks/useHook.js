import { useState, useEffect } from "react";

export function useTheme() {
  // Function to retrieve the theme preference from localStorage or use 'false' as the default
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || false;
  };

  // Initialize the 'theme' state variable with the retrieved theme preference
  const [theme, setTheme] = useState(getTheme());

  // Effect to update localStorage when the 'theme' state changes
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return { theme, toggleTheme };
}
