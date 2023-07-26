import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PingInfo from './PingInfo';
import {getFromInLocal} from "../utils/localStorege";

const UrlInfo = ({id}) => {

    const [pingInfo, setPingInfo] = useState({});
    const [visit, setVisit] = useState([]);

    useEffect(() => {
        const fetchUrlInfo = async () => {
            try{
                const responce = await axios({
                    method: 'GET',
                    url: `${process.env.REACT_APP_HOST_URL}url/getAnalytics/one/${id}`,
                    headers:{
                        "Authorization":`Bearer ${getFromInLocal('Url_Token')}`
                    }
                });
                console.log(responce);
                if(!responce.data.isError){
                    setPingInfo(responce.data.msg);
                    setVisit(responce.data.msg.visitHistory)
                }else{
                    alert("something went wrong please try again")
                }
            }catch(e){
                console.log(e);
                alert(e.response.data.Msg);
            } 
            }
        fetchUrlInfo();
    }, []);

    return (
        <div className="container mx-auto p-4">
        {(
            <div className="bg-orange-200 p-4 mb-4 rounded-md">
            <p>URL: {pingInfo.redirectURL}</p>
            <p>Total Pings: {visit.length}</p>
            </div>
        )}
            <div>
            {visit.map((ping, index) => (
                <PingInfo key={index} ping={ping} />
            ))}
            </div>
        </div>
    );
};

export default UrlInfo;
