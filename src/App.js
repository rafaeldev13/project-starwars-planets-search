import React from 'react';
import './App.css';
import Table from './components/Table';
import MyProvider from './context/MyProvider';
import InputName from './components/InputName';

function App() {
  return (
    <MyProvider>
      <InputName />
      <Table />
    </MyProvider>
  );
}

export default App;
