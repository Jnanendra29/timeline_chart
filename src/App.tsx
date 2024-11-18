import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import Counter from './components/Calendar/CalendarHeader';
import Button from './components/Shared/Button';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Button />
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
