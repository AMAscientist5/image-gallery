/* eslint-disable react/prop-types */

// ThemeToggle component allows the user to switch between light and dark themes
function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="flex justify-end pr-4 pt-4">
      <h1>{theme ? "Light" : "Dark"}</h1>
      <input type="checkbox" checked={theme} onChange={toggleTheme} />
    </div>
  );
}

export default ThemeToggle;
