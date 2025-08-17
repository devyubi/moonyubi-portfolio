import Header from './components/Header';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <footer className="border-t border-gray-200 py-8 text-sm text-neutral-500 dark:text-neutral-400 dark:bg-gray-600">
          포트폴리오 웹&앱 서비스 개발 @ 문유비
        </footer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
