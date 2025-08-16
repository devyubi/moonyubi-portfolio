import Header from './components/Header';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
