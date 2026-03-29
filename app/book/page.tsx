"use client";

import React, { useState } from "react";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

const BookingPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/book/confirmation");
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 font-heading text-center">Secure Your Booking</h1>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Booking Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm space-y-8">

              {/* Contact Info */}
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input required type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input required type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Traveler Details */}
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                  Traveler Details
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-3 text-sm text-gray-500">Traveler 1 (Lead Traveler)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                      <input placeholder="Passport Number (Optional)" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Payment Method */}
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                  Payment Details
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-primary-500 bg-primary-50 rounded-lg cursor-pointer">
                    <input type="radio" name="payment" defaultChecked className="text-primary-600 focus:ring-primary-500" />
                    <span className="ml-3 font-medium">Credit Card</span>
                    <div className="ml-auto flex space-x-2">
                      <div className="w-8 h-5 bg-gray-200 rounded"></div>
                      <div className="w-8 h-5 bg-gray-200 rounded"></div>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" className="text-primary-600 focus:ring-primary-500" />
                    <span className="ml-3 font-medium">PayPal</span>
                  </label>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input placeholder="0000 0000 0000 0000" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input placeholder="MM/YY" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                    <input placeholder="123" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full py-4 text-lg"
                isLoading={isLoading}
              >
                Complete Booking
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-24">
              <h3 className="text-lg font-bold mb-4">Order Summary</h3>
              <div className="flex items-start mb-4 pb-4 border-b border-gray-100">
                <div className="w-20 h-20 bg-gray-200 rounded-lg mr-4 flex-shrink-0 overflow-hidden relative">
                  {/* Placeholder image */}
                  <div className="absolute inset-0 bg-gray-300" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Mount Bromo Sunrise</h4>
                  <p className="text-xs text-gray-500">East Java, Indonesia</p>
                  <p className="text-xs text-gray-500 mt-1">2 Days • Adventure</p>
                </div>
              </div>

              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date</span>
                  <span className="font-medium">Dec 15, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Travelers</span>
                  <span className="font-medium">2 Adults</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per person</span>
                  <span className="font-medium">$150</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-100 font-bold text-lg">
                  <span>Total</span>
                  <span>$300</span>
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded-lg flex items-start text-xs text-green-700">
                <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Your booking is protected by our secure payment system and 100% satisfaction guarantee.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
