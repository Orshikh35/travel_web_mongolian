"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            router.push("/");
        }, 1500);
    };

    return (
        <div className="pt-24 pb-20 min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-card">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold mb-2 font-heading">Welcome Back</h1>
                        <p className="text-gray-500">Log in to your account to continue.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input required type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="you@example.com" />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <Link href="/forgot-password" className="text-xs text-primary-600 hover:text-primary-700">Forgot Password?</Link>
                            </div>
                            <input required type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="••••••••" />
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            className="w-full justify-center py-3"
                            isLoading={isLoading}
                        >
                            Log In
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="text-primary-600 font-medium hover:text-primary-700">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
