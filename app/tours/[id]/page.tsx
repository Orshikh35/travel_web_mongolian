"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { toursData } from "../../data/tourData";

const TourDetailPage = () => {
    const params = useParams();
    const [activeTab, setActiveTab] = useState("overview");
    const { lang } = useLanguage();
    const routeId = Array.isArray(params.id) ? params.id[0] : params.id;
    const tour = toursData.find((item) => item.slug === routeId || String(item.id) === routeId) || toursData[0];

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Image Grid */}
            <div className="h-[60vh] relative grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="relative h-full w-full">
                    <Image src={tour.images[0]} alt={tour.title[lang]} fill className="object-cover" priority />
                </div>
                <div className="hidden md:grid grid-rows-2 gap-2">
                    <div className="relative h-full w-full">
                        <Image src={tour.images[1] || tour.images[0]} alt={tour.title[lang]} fill className="object-cover" />
                    </div>
                    <div className="relative h-full w-full">
                        <Image src={tour.images[2] || tour.images[0]} alt={tour.title[lang]} fill className="object-cover" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 md:p-12 text-white">
                    <div className="container mx-auto">
                        <span className="bg-primary-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
                            {tour.type[lang]}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                            {tour.title[lang]}
                        </h1>
                        <div className="flex items-center space-x-6 text-sm md:text-base">
                            <span className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {tour.location[lang]}
                            </span>
                            <span className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {tour.days} {lang === "en" ? "Days" : "Хоног"}
                            </span>
                            <span className="flex items-center text-yellow-400">
                                <span className="mr-1">★</span> {tour.rating} ({tour.reviews} {lang === "en" ? "reviews" : "сэтгэгдэл"})
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        {/* Tabs */}
                        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
                            {[
                                { key: "overview", label: lang === "en" ? "Overview" : "Тойм" },
                                { key: "itinerary", label: lang === "en" ? "Itinerary" : "Хөтөлбөр" },
                                { key: "included", label: lang === "en" ? "Included" : "Багтсан" },
                                { key: "faq", label: lang === "en" ? "FAQ" : "Асуулт" }
                            ].map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`px-6 py-4 font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === tab.key
                                            ? "border-primary-500 text-primary-600"
                                            : "border-transparent text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="min-h-[400px]">
                            {activeTab === "overview" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <h3 className="text-2xl font-bold mb-4">{lang === "en" ? "About this tour" : "Энэ аяллын тухай"}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-8">{tour.description[lang]}</p>

                                    <h3 className="text-2xl font-bold mb-4">{lang === "en" ? "Highlights" : "Онцлох зүйлс"}</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {tour.highlights[lang].map((highlight, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}

                            {activeTab === "itinerary" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <div className="space-y-8">
                                        {tour.itinerary.map((item, idx) => (
                                            <div key={idx} className="relative pl-8 border-l-2 border-gray-200 last:border-0">
                                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-white shadow-sm" />
                                                <h4 className="text-lg font-bold mb-2">
                                                    {lang === "en" ? "Day" : "Өдөр"} {item.day}: {item.title[lang]}
                                                </h4>
                                                <p className="text-gray-600 mb-3">{item.desc[lang]}</p>
                                                {item.image && (
                                                    <div className="relative h-48 w-full rounded-lg overflow-hidden">
                                                        <Image src={item.image} alt={item.title[lang]} fill className="object-cover" />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "included" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-green-600">
                                                {lang === "en" ? "What's Included" : "Юу багтсан"}
                                            </h4>
                                            <ul className="space-y-3">
                                                {tour.included[lang].map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="text-gray-600">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-4 text-red-500">
                                                {lang === "en" ? "What's Excluded" : "Юу багтаагүй"}
                                            </h4>
                                            <ul className="space-y-3">
                                                {tour.excluded[lang].map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <svg className="w-5 h-5 text-red-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                        <span className="text-gray-600">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h4 className="text-lg font-bold mb-4">
                                            {lang === "en" ? "What to Bring" : "Юу авчрах вэ"}
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {tour.whatToBring[lang].map((item, idx) => (
                                                <li key={idx} className="flex items-start text-gray-600">
                                                    <span className="mr-2">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "faq" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <div className="space-y-6">
                                        {tour.faq.map((item, idx) => (
                                            <div key={idx} className="border-b border-gray-100 pb-6 last:border-0">
                                                <h4 className="text-lg font-bold mb-2 text-gray-900">{item.question[lang]}</h4>
                                                <p className="text-gray-600">{item.answer[lang]}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Booking Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24 bg-white rounded-2xl shadow-card p-6 border border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <span className="text-sm text-gray-500 block">
                                        {lang === "en" ? "Starting from" : "Эхлэх үнэ"}
                                    </span>
                                    <span className="text-3xl font-bold text-gray-900">${tour.price}</span>
                                    <span className="text-gray-500 text-sm"> / {lang === "en" ? "person" : "хүн"}</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {lang === "en" ? "Select Date" : "Огноо сонгох"}
                                    </label>
                                    <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {lang === "en" ? "Travelers" : "Аялагчид"}
                                    </label>
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                                        <option>1 {lang === "en" ? "Person" : "Хүн"}</option>
                                        <option>2 {lang === "en" ? "People" : "Хүн"}</option>
                                        <option>3 {lang === "en" ? "People" : "Хүн"}</option>
                                        <option>4+ {lang === "en" ? "People" : "Хүн"}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
                                <span>{lang === "en" ? "Total" : "Нийт"}</span>
                                <span className="font-bold text-lg text-gray-900">${tour.price * 2}</span>
                            </div>

                            <Button href="/book" variant="primary" className="w-full justify-center py-4 text-lg">
                                {lang === "en" ? "Book Now" : "Одоо захиалах"}
                            </Button>

                            <p className="text-xs text-center text-gray-400 mt-4">
                                {lang === "en"
                                    ? "No payment required today. Free cancellation up to 48h before."
                                    : "Өнөөдөр төлбөр шаардлагагүй. 48 цагийн өмнө үнэгүй цуцлах."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetailPage;
