import React from 'react';


const Home = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center items-center">
        <img
            src="../assets/logo.png"
            alt="URL Shortener Logo"
            className="mb-8 rounded-full shadow-md"
        />
        <h1 className="text-3xl font-bold mb-4">URL Shortener App</h1>
        <p className="text-gray-600 text-lg mb-8">
            Shorten your long URLs and share them easily!
        </p>
        <button
        className=" bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
        >
        Create Short URL
        </button>
        </div>
    );
};

export default Home;
