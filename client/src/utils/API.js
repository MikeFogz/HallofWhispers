import axios from 'axios'

export default {
  // get all posts
  getPosts: function() {
    return axios.get("/api/posts")
  },
  // saves post
  savePost: function(postData) {
    return axios.post("/api/posts", postData)
  }
}