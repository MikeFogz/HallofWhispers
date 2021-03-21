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
    return axios.post("/api/characters", characterData);
};


const routes = {
    findAll,
    createChr,
};


export default routes;
