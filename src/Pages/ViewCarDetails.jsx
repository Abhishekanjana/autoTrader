import React from 'react';
import { useParams } from 'react-router-dom';
import { CarData } from '../Data/CarData.js'; // Importing the dummy data
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ViewCarDetails = () => {
  const { id } = useParams();
  const car = CarData.find(car => car.id === parseInt(id));

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    <div className="pb-10">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
          <img className="h-auto max-w-xs" src={car.image} alt={car.title} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  border border-red-200">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">Car Details</h1>
            <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Category</dt>
                <dd className="text-lg font-semibold">{car.category}</dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Emission Norm Compliance</dt>
                <dd className="text-lg font-semibold">{car.emissionNorm}</dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Fuel Type</dt>
                <dd className="text-lg font-semibold">{car.fuelType}</dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Transmission</dt>
                <dd className="text-lg font-semibold">{car.transmission}</dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Max Power</dt>
                <dd className="text-lg font-semibold">{car.maxPower}</dd>
              </div>
              {/* Add more feature items here */}
            </dl>
          </div>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border border-red-200">
          <div className="md:col-span-2">
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Max Torque</dt>
              <dd className="text-lg font-semibold">{car.maxTorque}</dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Engine Displacement</dt>
              <dd className="text-lg font-semibold">{car.engineDisplacement}</dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Rear AC Ducts</dt>
              <dd className="text-lg font-semibold">{car.rearACDucts}</dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Audio Control</dt>
              <dd className="text-lg font-semibold">{car.audioControl}</dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Cruise Control</dt>
              <dd className="text-lg font-semibold">{car.cruiseControl}</dd>
            </div>
            {/* Add more feature items here */}
          </div>
          </div>
      </div>
    </div>
  </div>
    <Footer />
    </>
  );
};

export default ViewCarDetails;