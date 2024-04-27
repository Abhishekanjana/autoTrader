import React, { useState } from 'react';
import { fetchCarInfo } from '../api/rc.js';
import Navbar from '../components/Navbar.jsx';

function CarInfo() {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await fetchCarInfo(searchQuery);
      setResult(result);
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
     {/* left side where search for car information */}
     <div class="grid grid-rows-3 grid-flow-col gap-4">
    <div className="max-w-md  row-span-3 justify ">
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-6">Search for Car Information</h1>
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search RC Number" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
     
    </form>
    </div>
</div>
  {/* right side where show rc details by api */}
  {result && (
<div className="justify-center col-span-2 ">
  <div className='   '>
  <ul className=" flex flex-col">
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
        <div className="flex justify-between w-full">
          Registered
          <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">{result.registered}</span>
        </div>
      </li>
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
        <div className="flex justify-between w-full">
          Owner Name
          <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">{result.owner}</span>
        </div>
      </li>
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
        <div className="flex justify-between w-full">
          Address
          <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">{result.currentAddress}</span>
        </div>
      </li>
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
        <div className="flex justify-between w-full">
          Chassis Number
          <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">{result.chassisNumber}</span>
        </div>
      </li>
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
        <div className="flex justify-between w-full">
          Maker Description
          <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">{result.makerDescription}</span>
        </div>
      </li>
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
        <div className="flex justify-between w-full">
          Fuel Type
          <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">{result.fuelType}</span>
        </div>
      </li>
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
        <div className="flex justify-between w-full">
          Fitness Upto
          <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">{result.fitnessUpto}</span>
        </div>
      </li>
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
        <div className="flex justify-between w-full">
          Financed
          <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">{result.financed}</span>
        </div>
      </li>
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
        <div className="flex justify-between w-full">
          Permit Issued
          <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">{result.permitIssued}</span>
        </div>
      </li>
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
        <div className="flex justify-between w-full">
          Manufactured
          <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">{result.manufactured}</span>
        </div>
      </li>
    </ul>
    </div>
</div>
)}
</div>

</>

  );
}

export default CarInfo;
