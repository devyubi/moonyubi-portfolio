import Header from './components/Header';
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

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}

export default App;
