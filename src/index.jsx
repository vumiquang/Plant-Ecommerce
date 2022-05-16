import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import App from './App';
import './sass/style.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
