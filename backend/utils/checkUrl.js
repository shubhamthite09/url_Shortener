const checkUrl = (url)=>{
    let temp = url.split("");
    if(temp.slice(0,8).join("") != "https://"){
        return "https://"+url;
    }else{
        return url;
    }

}

module.exports = {
    checkUrl
}