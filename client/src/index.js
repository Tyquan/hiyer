import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App, {history} from './routes/index';

ReactDOM.render(<App />, document.getElementById('app'));