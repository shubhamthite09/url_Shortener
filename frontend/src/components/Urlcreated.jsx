
import React from 'react';


const Urlcreate = () => {

    return (
        <form className="flex mt-4 p-3 m-5">
        <input
            type="text"
            placeholder="Enter URL to shorten"
            className="flex-grow border rounded-l-md p-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
        >
            Shorten
        </button>
        </form>
    );
};

export default Urlcreate;