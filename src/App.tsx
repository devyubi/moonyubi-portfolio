import Header from './components/Header';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
