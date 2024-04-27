import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarDetails from './Pages/CarDetails'; // Import your CarDetails component
import ViewCarDetails from './Pages/ViewCarDetails'; // Import your ViewCarDetails component
import Login from './Pages/Login';
import CarInfo from './Pages/CarInfo';
import CarPrice from './Pages/CarPrice';
import Home from './Pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/car-details/:id" element={<ViewCarDetails />} />
        <Route path="/" element={<Login />} />
        <Route path="/Car" element={<CarInfo />} />
        <Route path='/Carprice' element={<CarPrice/>} />
        <Route path='/Home' element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
