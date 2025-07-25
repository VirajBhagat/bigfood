
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserContext>
      <App />
      <ToastContainer autoClose={1000} position="bottom-right" />
    </UserContext>
  </Provider> 
)
