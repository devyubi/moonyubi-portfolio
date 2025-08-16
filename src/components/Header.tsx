import { useThemeContext } from '../contexts/ThemeContext';

const Header = () => {
  const theme = useThemeContext();

  if (!theme) return null;

  const { isDarkMode, setIsDarkMode } = theme;

  const handleClickToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header>
      <div>
        <h2>ToggleSwitch</h2>
        <button onClick={handleClickToggle}> {isDarkMode ? 'Dark' : 'Light'} </button>
      </div>
    </header>
  );
};

export default Header;
