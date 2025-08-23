import Header from './components/Header';
<<<<<<< HEAD
import Footer from './components/Footer';
import { ThemeProvider, useThemeContext } from './contexts/ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

const AppContent = () => {
  const theme = useThemeContext();

  if (!theme) return null;

  const { isDarkMode } = theme;

  return (
    <div
      className={
        isDarkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-gray-50 text-black min-h-screen'
      }
    >
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
=======
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
>>>>>>> 4396a1eacfdbb8939f7e5c09d25c0065a1dd8eab

function App() {
  return (
    <Router>
      <ThemeProvider>
<<<<<<< HEAD
        <AppContent />
=======
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Footer />
>>>>>>> 4396a1eacfdbb8939f7e5c09d25c0065a1dd8eab
      </ThemeProvider>
    </Router>
  );
}

export default App;
