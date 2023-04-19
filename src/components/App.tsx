import { BrowserRouter } from 'react-router-dom';
import '../styles/main.css';
import Routes from '../routes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
