import axios from 'axios'
async function fetchHello(){
    let res = axios.get("/api/helloworld");
    return res
}
export {
    fetchHello
}