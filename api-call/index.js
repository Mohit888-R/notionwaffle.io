const Axios = require('axios');
const Cookies = require('js-cookie');

// const URI = 'https://notinowaffle-acntiqo7h-mohit888-r.vercel.app/api/v1'
// const URI = 'https://notinowaffle-ltr53m3al-mohit888-r.vercel.app/api/v1'
const URI = 'http://localhost:5000/api/v1';


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
    const url = `${URI}/subscribe`;
    const data = { email }; // create a data object with email field
    headers = {...headers}; // create a new headers object
    return await Axios.post(url, data, { headers }).then((response) => {return response}).catch(error=>console.log(error));
}


export async function PostTestimonial({username,rating,description}){
    const url = `${URI}/testimonial/testimonials`;
    const data = {username, rating, description};
    headers = {...headers};
    return await Axios.post(url,data,{headers}).then((response)=>{return response}).catch(error=>console.log(error));
}


export async function getalltestimonials(){
    const url = `${URI}/testimonial/getalltestimonials`;
    headers = {...headers};
    return await Axios.get(url,{headers}).then((response)=>{return response}).catch(error=>console.log(error));
}
 

export async function topTestimonials(){
    const url = `${URI}/testimonial/topTestimonials`;
    headers = {...headers};
    return await Axios.get(url,{headers}).then((response)=>{return response}).catch(error=>console.log(error));
}

export async function getRazorpayKey(){
    const url = `${URI}/getKey`;
    headers = {...headers};
    return await Axios.get(url,{headers}).then((response)=>{ return response?.data?.key}).catch(error=>console.log(error));
}


export async function checkoutPayment(amount){
    const url = `${URI}/payment/checkout`;
    headers = {...headers};
    return await Axios.post(url,{amount},{headers}).then((response)=>{return response}).catch(error=>console.log(error));
}


export async function Register({username, email, password}){
    
    const payload = {username, email, password}
    const url = `${URI}/authentication/register`;
    headers = {...headers};
    return await Axios.post(url,payload, {headers}).then((response)=>{return response}).catch(error=>console.log(error));
}

export async function login({email, password}){
    const data = {email, password};
    const url = `${URI}/authentication/login`;
    headers = {...headers};
    return await Axios.post(url,data, {headers}).then((response)=>{return response}).catch(error=>console.log(error));
}