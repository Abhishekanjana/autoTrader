import React from 'react';
import Room from '@material-ui/icons/Room';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar h-15vh shadow-md bg-white fixed w-full z-50">
            <div className="navbar-container flex flex-col ">
                <div className="navbar-header flex items-center w-80vw pt-10  ml-10 mr-10">
                    <div className="navbar-header-left flex items-center w-1/2">
                        <div className="navbar-header-left-logo mr-10">
                            <img src={Logo} alt="" className="h-10 w-auto" />
                        </div>
                        <div className="navbar-header-left-search flex border border-gray-300 rounded-2xl w-80">
                            <input type='text' placeholder='AutoTrader' className="h-full w-full pl-3 outline-none text-sm" />
                            <div className='navbar-search-icon flex items-center px-2'>
                                <SearchIcon className="h-5" />
                            </div>
                        </div>
                    </div>
                    <div className="navbar-header-right w-1/2 flex justify-end">
                        <div className="languages flex items-center mr-4">
                            <p className="language-name text-xs underline">English</p>
                            <div className="language-dropmenu flex items-center ml-1">
                                <ArrowDropDown className="h-5" />
                            </div>
                        </div>
                        <div className="login-register flex items-center">
                            <button className="border-none rounded-lg flex items-center bg-orange-500 text-white px-2 py-1">
                                <span>
                                    <AccountCircle />
                                </span>
                                <Link to="/" className="font-semibold ml-1">Login/Register</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="navbar-footer w-80vw flex justify-between ml-10 mr-10 mt-2">
                    <div className="navbar-footer-left flex">
                        <div className="navbar-footer-left-categories flex">
                            <div className="navbar-footer-left-categories-name flex items-center text-gray-600 font-semibold">
                                
                            </div>
                            <div className="navbar-footer-left-categories-dropmenu flex items-center ml-1">
                                
                            </div>
                            <div className="navbar-footer-left-categories-name flex items-center text-gray-600 font-semibold">
                                <Link to="/Car" className="text-xl">Vehicle Information</Link>
                            </div>
                            <div className="navbar-footer-left-categories-dropmenu flex items-center ml-1">
                                
                            </div>
                            <div className="navbar-footer-left-categories-name flex items-center text-gray-600 font-semibold" style={{ marginRight: '18px' }}>
                                
                            </div>
                            <div className="navbar-footer-left-categories-name flex items-center text-gray-600 font-semibold" style={{ marginRight: '15px' }}>
                                
                            </div>
                            <div className="navbar-footer-left-categories-name flex items-center text-gray-600 font-semibold">
                            <Link to="/Carprice" className="text-xl">Car Selling Price</Link>
                            </div>
                            <div className="navbar-footer-left-categories-dropmenu flex items-center ml-1">
                            
                            </div>
                            <div className="navbar-footer-left-categories-name flex items-center text-gray-600 font-semibold">
                                
                            </div>
                            <div className="navbar-footer-left-categories-dropmenu flex items-center ml-1">
                                
                            </div>
                            <div className="navbar-footer-left-categories-name flex items-center text-gray-600 font-semibold">
                                
                            </div>
                            <div className="navbar-footer-left-categories-dropmenu flex items-center ml-1">
                        
                            </div>
                        </div>
                    </div>
                    <div className="navbar-footer-right flex">
                        <div className="navbar-footer-right-city flex items-center">
                            <div className="navbar-location flex items-center">
                                <Room className="h-5" />
                            </div>
                            <div className="navbar-select flex items-center ml-1">
                                <span className="text-gray-600 text-sm font-semibold">Select City</span>
                            </div>
                            <div className="navbar-dropdown flex items-center ml-1">
                                <ArrowDropDown className="h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
