import axios from 'axios'
async function fetchHello(){
    let res = axios.get("/api/helloworld");
    return res
}
async function fetchJSONData(){
    let res = fetch('/api/getJsonData')
    return res
}
export {
    fetchHello,
    fetchJSONData
}