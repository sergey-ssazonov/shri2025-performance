import { createRoot } from 'react-dom/client';
import '../reset.css';
import '../styles.css';
import {Header} from './Header';
import {Main} from './App';

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Main />
  </>
);
