import React from 'react';
import ReactDOM from 'react-dom/client';

// Los componentes en React siempre son funciones que arrancan con la primera letra mayuscula y tienen que retornar algo (return).
// class App {}
// const App = () => {}
import App from './components/App';

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<App />
);
 