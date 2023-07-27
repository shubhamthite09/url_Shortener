export const setInLocal = (key,data) =>{
    localStorage.setItem(key,JSON.stringify(data));
}

export const getFromInLocal = (key) =>{
    return JSON.parse(localStorage.getItem(key));
}