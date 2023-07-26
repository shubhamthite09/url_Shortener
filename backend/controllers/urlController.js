require("dotenv").config();
const {urlModel} = require("../models/urlModel");
const shortid = require("shortid");
const geoip = require('geoip-lite');
const useragent = require('useragent');


const createNewUrl = async(req,res) =>{
    try{
        const {url,userId} = req.body;
        if (url){
            const shortID =shortid();
            let newUrl = new urlModel({shortId: shortID,redirectURL:url,visitHistory: [],userId:userId})
            await newUrl.save();
            res.status(201).json({isError:false, Msg: newUrl });
        }else{
            res.status(400).json({ isError:true,msg: "url is required" });
        }
    }catch(err){
        res.status(500).send({isError: true,Msg: err.message});
    }
}

const updateVisit = async(req,res)=> {
    try{
        const shortId = req.params.shortId;
        const ipAddress = req.ip;
        const userAgent = useragent.parse(req.headers['user-agent']);
        const geo = geoip.lookup(ipAddress);
        const location = geo ? `${geo.city}, ${geo.country}` : 'Unknown';
        const device = `${userAgent.device.family} ${userAgent.os.family}`;
        const entry = await urlModel.findOneAndUpdate({shortId:shortId},{ $push: { visitHistory: {timestamp: Date.now(),ipAddress:ipAddress,location:location,device:device}
            ,}
        ,});
        console.log(entry.redirectURL);
        res.redirect(entry.redirectURL);
    }catch(err){
        res.status(500).send({isError: true,Msg: err.message});
    }
}

const getInfoOfYourUrl = async(req,res)=> {
    try{
        const {userId} = req.body;
        let newUrl = await urlModel.find({userId:userId});
        res.status(200).json({isError:false, msg:newUrl });
    }catch(err){
        res.status(500).send({isError: true,Msg: err.message});
    }
}

const getInfoOfOneUrl = async(req,res)=> {
    try{
        const {id} = req.params;
        let newUrl = await urlModel.findOne({_id:id});
        res.status(200).json({isError:false, msg:newUrl });
    }catch(err){
        res.status(500).send({isError: true,Msg: err.message});
    }
}

const deleteUrl = async(req,res)=> {
    try{
        const {id} = req.body;
        let newUrl = await urlModel.findByIdAndDelete({_id:id});
        res.status(200).json({isError:false, msg:newUrl });
    }catch(err){
        res.status(500).send({isError: true,Msg: err.message});
    }
}

module.exports={
    createNewUrl,updateVisit,getInfoOfYourUrl,deleteUrl,getInfoOfOneUrl
}