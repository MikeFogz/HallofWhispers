import axios from "axios";

// get all posts
//   getPosts: function () {
//     return axios.get("/api/posts");
//   },
//   // create post
//   createPost: function (postData) {
//     return axios.post("/api/posts", postData);
//   },

const findAll = () => {
    return axios.get("/api/characters");
};

const createChr = (characterData) => {
    let token = localStorage.getItem("auth-token");
    return axios.post("/api/characters", characterData, {
        headers: { "x-auth-token": token }
    })
};


const routes = {
    findAll,
    createChr,
};


export default routes;
