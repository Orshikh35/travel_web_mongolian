"use client";

import React from "react";
import Link from "next/link";
import Button from "../../components/Button";
import { motion } from "framer-motion";

const ConfirmationPage = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-card text-center"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h1 className="text-3xl font-bold mb-2 font-heading text-gray-900">Booking Confirmed!</h1>
                    <p className="text-gray-500 mb-8">
                        Thank you for your booking. A confirmation email has been sent to your inbox.
                    </p>

                    <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
                        <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
                            <span className="text-sm text-gray-500">Booking ID</span>
                            <span className="font-mono font-bold text-gray-900">#TRV-88291</span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Tour</span>
                                <span className="text-sm font-medium text-gray-900">Mount Bromo Sunrise</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Date</span>
                                <span className="text-sm font-medium text-gray-900">Dec 15, 2025</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Travelers</span>
                                <span className="text-sm font-medium text-gray-900">2 Adults</span>
                            </div>
                            <div className="flex justify-between pt-2 mt-2 border-t border-gray-200">
                                <span className="text-sm font-bold text-gray-900">Total Paid</span>
                                <span className="text-sm font-bold text-primary-600">$300.00</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" leftIcon={
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        }>
                            Download Ticket
                        </Button>
                        <Button href="/" variant="outline">
                            Return Home
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ConfirmationPage;
