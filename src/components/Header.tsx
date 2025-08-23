import { useThemeContext } from '../contexts/ThemeContext';

const Header = () => {
  const theme = useThemeContext();

  if (!theme) return null;

  const { isDarkMode, setIsDarkMode } = theme;

  const handleClickToggle = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  };

  return (
    <header>
      <div
        className={`container mx-auto px-4 py-3 flex items-center justify-between 
          ${isDarkMode ? 'bg-black text-white border-gray-700' : 'bg-slate-100 text-black border-gray-200'} 
          border-b`}
      >
        <a href="/" aria-label="홈으로 이동">
          <img
            src={isDarkMode ? '/yubi_portfolio_dark.png' : '/yubi_portfolio_light.png'}
            alt="yubi's portfolio"
            className="h-12"
          />
        </a>
        <button className="border p-1 rounded-lg" onClick={handleClickToggle}>
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  );
};

export default Header;
