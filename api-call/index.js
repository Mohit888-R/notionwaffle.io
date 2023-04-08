const Axios = require('axios');




let headers = {
    "Content-Type": "application/json",
    srcFrom: "Notionwaffle",
    // sessionId:  typeof window != "undefined" ? localStorage.getItem("sessionId") : Cookies.get("sessionId") != undefined ? Cookies.get("sessionId") : "",
};

const MULTIPART_HEADER = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

export async function Subscribe(email){
    const url = `http://localhost:5000/api/v1/subscribe`;
    const data = { email }; // create a data object with email field
    headers = {...headers}; // create a new headers object
    return await Axios.post(url, data, { headers }).then((response) => {return response}).catch(error=>console.log(error));
}
