import React from 'react'
import {useParams} from "react-router-dom";

function Report() {
    const {id} = useParams();
return (
    <div>{id}</div>    
)
}

export default Report