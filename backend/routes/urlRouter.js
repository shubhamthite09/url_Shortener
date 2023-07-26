const express = require('express');
const { createNewUrl,updateVisit,getInfoOfYourUrl ,deleteUrl,getInfoOfOneUrl} = require("../controllers/urlController");
const {authenticator} = require("../middleware/authentation")
const urlRouter = express.Router();
urlRouter.use(express.json());

urlRouter.post("/", authenticator,createNewUrl);
urlRouter.get("/link/:shortId", updateVisit);
urlRouter.get("/getAnalytics", authenticator,getInfoOfYourUrl);
urlRouter.get("/getAnalytics/one/:id", authenticator,getInfoOfOneUrl);
urlRouter.delete("/delete", authenticator,deleteUrl);

module.exports={
    urlRouter
}