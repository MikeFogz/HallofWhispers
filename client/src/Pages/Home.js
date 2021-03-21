//import React, { useState, useEffect } from "react";
import Card from "../Components/Card/Card";
import Col from "../Components/Col/Col";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import StatCard from "../Components/StatCard/StatCard";
import Wrapper from "../Components/Wrapper/Wrapper";
import { PostList, PostListItem } from "../Components/PostList/PostList";
import "./Home.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AccountContext from "../Context/AccountContext";
import React, { useState, useEffect, useContext } from "react";

const Home = () => {

  // Setting initial state
  const [posts, setPosts] = useState([]);
  const [postMessage, setPostMessage] = useState("");

  // handles the input change for posting a message to the postboard
  const handleInputChange = (e) => {
    const { value } = e.target;
    setPostMessage(value);
  };

  // sumbits the post
  const handleSubmit = (e) => {
    // prevents page from refreshing
    e.preventDefault();
    // get local token
    let token = localStorage.getItem("auth-token");
    // clears the input field after submitting
    setPostMessage("");

    axios.post("/api/posts", { message: postMessage }, { headers: { "x-auth-token": token } }).then((res) => {
      console.log(res);
      const data = res.data;
      console.log(data);
      setPosts([...posts, data]);
    });

  };

  // loads all the posts
  useEffect(() => {
    loadPosts();
  }, []);


  // grabbing all the posts from the database
  function loadPosts() {
    let token = localStorage.getItem("auth-token");
    axios.get("/api/posts", { headers: { "x-auth-token": token } }).then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }

  const { userData } = useContext(AccountContext);
  const history = useHistory();

  //If you are not loggedin - go back to the log-in page
  useEffect(() => {
    if (!userData.pending && !userData.account) {
      history.push("/login");
    }
    if (!userData.pending && !userData.account?.charCreated) {
      history.push("/character");
    }
  }, [userData.pending, userData.account, history])

  //--------------------------------------------
  return (
    <div>
      <Wrapper>
        <Container>
          <Row>
            <Col size="md-6">
              <h5>Valiant Rundis</h5>
              <strong>Class Level: </strong>
              <br />
              <strong>Race: </strong>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <StatCard />
            </Col>
            <Col size="md-6">
              <Row>
                <form onSubmit={handleSubmit}>
                  <div>
                    <textarea
                      onChange={handleInputChange}
                      type="text"
                      style={{ marginTop: "10px" }}
                      name="message"
                      value={postMessage}
                      className="form-control"
                      placeholder="Enter your post here"
                      aria-label="post-message"
                      aria-describedby="button-addon2"
                      id="myInput"
                    />
                    <button
                      className="btn btn-success"
                      type="submit"
                      id="button-addon2"
                    >
                      Post
                    </button>
                  </div>
                </form>
              </Row>
              <Row>
                <Card>
                  <PostList>
                    {posts.map((post, index) => {
                      return (

                        <PostListItem
                          // style={{border: "0"}}
                          key={index}
                          date={post.date}
                          message={post.message}
                          myAccount={(post.accountId === userData.account?.id) ? "true" : "false"}
                        />
                      );
                    })}
                  </PostList>
                </Card>
              </Row>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Home;
