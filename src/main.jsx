import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom';
import store from './store/store.jsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
)

