import axios from "axios";
import { getPath } from "./utils";

const fetchData = async (endpoint) => {
    try {
       const data= await axios.get(endpoint)
       return data
    } catch (error) {
        console.log('error',error)
    }
}

export const getDatabase = async () =>{
    
    const [cards,profile,highline,message,request] = await Promise.all([
        (async () => (await fetchData(getPath("cards"))))(),
        (async () => (await fetchData(getPath("profile"))))(),
        (async () => (await fetchData(getPath("highline"))))(),
        (async () => (await fetchData(getPath("message"))))(),
        (async () => (await fetchData(getPath("request"))))()
    ]);
    console.log(cards,profile)
    return (cards,profile,highline,message,request)
};

