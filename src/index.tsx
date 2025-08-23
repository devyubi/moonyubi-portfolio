import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// as 문법은 개발자가 HTMLElement 라고 확신한다는 것을 VSCode 에 알려줌
// as 문법은 개발자가 null 이 아니라고 VSCode 에 알려줌
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
