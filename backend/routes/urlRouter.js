const express = require('express');
const { createNewUrl,updateVisit,getInfoOfYourUrl } = require("../controllers/urlController");
const {authenticator} = require("../middleware/authentation")
const urlRouter = express.Router();
urlRouter.use(express.json());

urlRouter.post("/", authenticator,createNewUrl);
urlRouter.get("/link/:shortId", updateVisit);
urlRouter.get("/getAnalytics", authenticator,getInfoOfYourUrl);

module.exports={
    urlRouter
}