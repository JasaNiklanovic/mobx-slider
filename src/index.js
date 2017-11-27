import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createRenderer } from 'fela'
import { Provider as FelaProvider } from 'react-fela'
import { Provider as MobxProvider } from 'mobx-react'
import Store from './Store'

const renderer = createRenderer()
const store = new Store();

ReactDOM.render(
  <FelaProvider renderer={renderer}>
    <MobxProvider store={store}>
      <App />
    </MobxProvider>
  </FelaProvider>,
  document.getElementById('root')
)