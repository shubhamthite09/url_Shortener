// src/components/PingInfo.js
import React from 'react';
import {getDateString} from "../utils/getDate"

const PingInfo = ({ ping }) => {
    return (
        <div className="bg-white p-4 my-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-2">{getDateString(ping.timestamp)}</h2>
            <p>IP Address : {ping.ipAddress}</p>
            <p>Location : {ping.location}</p>
            <p>Device : {ping.device}</p>
        </div>
    );
};

export default PingInfo;
