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
        className={`px-20 py-2 border-b border-gray-200 flex items-center justify-between 
              ${isDarkMode ? 'bg-black text-white' : 'bg-slate-100 text-black'}`}
      >
        {/* yubi's 는 eslint 규칙에 맞지 않음. &apos;s : ' */}
        <h2>yubi&apos;s portfoilo</h2>
        <button className="border p-1 rounded-lg" onClick={handleClickToggle}>
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  );
};

export default Header;
