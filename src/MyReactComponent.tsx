import React from 'react';
import Home from './components/Home';
import './MyReactComponent.css';
import { Route, Routes } from 'react-router';

const MyReactComponent: React.FC = () => { 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default MyReactComponent;
