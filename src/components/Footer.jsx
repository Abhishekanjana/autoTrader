import React from 'react';


// Import material icons directly from Google's Material Icons library
import { MdBadge, MdDirectionsCar, MdLocalOffer, MdCompare } from 'react-icons/md';

const Footer = () => {
    return (
        <div className=" border border-gray-300 bg-slate-100">
            <div className="flex justify-around border-b border-gray-300 py-4">
                <div className="flex items-center">
                    <MdBadge className="h-10 w-10" />
                    <div className="ml-2">
                        <div className="font-bold">India’s #1</div>
                        <div>Largest Auto portal</div>
                    </div>
                </div>
                <div className="flex items-center">
                    <MdDirectionsCar className="h-10 w-10" />
                    <div className="ml-2">
                        <div className="font-bold">Car Sold</div>
                        <div>Every 4 minute</div>
                    </div>
                </div>
                <div className="flex items-center">
                    <MdLocalOffer className="h-10 w-10" />
                    <div className="ml-2">
                        <div className="font-bold">Offers</div>
                        <div>Stay updated pay less</div>
                    </div>
                </div>
                <div className="flex items-center">
                    <MdCompare className="h-10 w-10" />
                    <div className="ml-2">
                        <div className="font-bold">Compare</div>
                        <div>Decode the right car</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-around py-2">
                <div className="flex flex-col items-start">
                    <div className="font-semibold mb-2">OVERVIEW</div>
                    <div>About us</div>
                    <div>FAQs</div>
                    <div>Privacy Policy</div>
                    <div>Terms & Conditions</div>
                    <div>Corporate Policies</div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="font-semibold mb-2">OTHERS</div>
                    <div>Advertise with Us</div>
                    <div>Careers</div>
                    <div>Customer Care</div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="font-semibold mb-2">CONNECT WITH US</div>
                    <div>1800 200 3000 (Toll-Free)</div>
                    <div>support@AutoTrader</div>
                    <div>Dealer solutions</div>
                    <div>Used Cars Business</div>
                    <div>Contact Us</div>
                    <div>Feedback</div>
                </div>
            </div>
            <div className="flex justify-between items-center px-8 py-4">
                <div className="text-sm text-gray-600">&copy; 2024 AutoTrader</div>
                <div className="flex items-center">
                   
                </div>
            </div>
        </div>
    );
};

export default Footer;
