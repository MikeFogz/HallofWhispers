import axios from "axios";



const findAll = () => {
    return axios.get("/api/characters");
}

const createChr = (characterData) => {
    return axios.post("/api/characters", characterData);
};


const routes = {
    findAll,
    createChr,
}


export default routes;
