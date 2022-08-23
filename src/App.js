import React from 'react';
import './App.css';
import Table from './components/Table';
import MyProvider from './context/MyProvider';
import InputName from './components/InputName';
import InputNumbers from './components/InputNumbers';

function App() {
  return (
    <MyProvider>
      <InputName />
      <InputNumbers />
      <Table />
    </MyProvider>
  );
}

export default App;
