import axios from "axios";

export default {
  // get all posts
//   getPosts: function () {
//     return axios.get("/api/posts");
//   },
//   // create post
//   createPost: function (postData) {
//     return axios.post("/api/posts", postData);
//   },

    findAll: () => {
        return axios.get("/api/characters")
    },

    createChr: (characterData) => {
        return axios.post("/api/characters", characterData)
    },
};
