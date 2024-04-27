import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CarData } from '../Data/CarData.js';

const CarDetails = () => {
  const navigate = useNavigate();

  const handleViewDetails = (car) => {
    navigate(`/car-details/${car.id}`); // Navigate to the details page for the selected car
  };

  return (
    <div>
      <h1>Car Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {CarData.map((car, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <button onClick={() => handleViewDetails(car)}>
              <img className="p-8 rounded-t-lg" src={car.image} alt={car.title} />
            </button>
            <div className="px-5 pb-5">
              <button onClick={() => handleViewDetails(car)}>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{car.title}</h5>
              </button>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{car.price.toLocaleString()}</span>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleViewDetails(car)}>View More Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarDetails;
