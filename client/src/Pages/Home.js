import React, { useState, useEffect } from "react";
import Card from "../Components/Card/Card";
import Col from "../Components/Col/Col";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import StatCard from "../Components/StatCard/StatCard";
import Wrapper from "../Components/Wrapper/Wrapper";
import { PostList, PostListItem } from "../Components/PostList/PostList";
import "./Home.css";
import axios from "axios";

const Home = () => {
  // Setting initial state
  const [posts, setPosts] = useState([]);
  const [postMessage, setPostMessage] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setPostMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/api/posts", { message: postMessage }).then((res) => {
      console.log(res);
      const data = res.data;
      console.log(data);
      setPosts([...posts, data]);
    });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  function loadPosts() {
    axios.get("/api/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }

  return (
    <div>
      <Wrapper>
        <Container>
          <Row>
            <Col size="md-4">
              <h5>Valiant Rundis</h5>
              <strong>Class Level: </strong>
              <br />
              <strong>Race: </strong>
            </Col>
          </Row>
          <Row>
            <Col size="md-4">
              <StatCard />
            </Col>
            <Col size="md-8">
              <Row>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      onChange={handleInputChange}
                      type="text"
                      style={{ marginTop: "10px" }}
                      name="message"
                      value={postMessage}
                      className="form-control"
                      placeholder="Enter your post here"
                      aria-label="post-message"
                      aria-describedby="button-addon2"
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
                        <PostListItem key={index} message={post.message} />
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
