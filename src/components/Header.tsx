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
<<<<<<< HEAD
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
=======
        className={`px-20 py-2 border-b border-gray-200 flex items-center justify-between 
              ${isDarkMode ? 'bg-black text-white' : 'bg-slate-100 text-black'}`}
      >
        {/* yubi's 는 eslint 규칙에 맞지 않음. &apos;s : ' */}
        <h2>yubi&apos;s portfoilo</h2>
>>>>>>> 4396a1eacfdbb8939f7e5c09d25c0065a1dd8eab
        <button className="border p-1 rounded-lg" onClick={handleClickToggle}>
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  );
};

export default Header;
