import React, { useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import Col from "../Components/Col/Col";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import StatCard from "../Components/StatCard/StatCard";
import Wrapper from "../Components/Wrapper/Wrapper";
import { PostList, PostListItem } from "../Components/PostList/PostList"
import API from "../utils/API";
import "./Home.css";

const Home = () => {
  // Setting initial state
  const [posts, setPosts] = useState("")
  const [postMessage, setPostMessage] = useState("")

  const handleInputChange = (e) => {
    const { value } = e.target;
    setPostMessage(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("testing submit");

    API.createPost(postMessage)
      .then(res => setPosts(res.data))
      .catch(err => console.log(err))
  }


  return (
    <div>
      <Wrapper>
        <Container>
          <Row>
            <Col size="md-4">
              <h1>Valiant Rundis</h1>
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
                        <PostListItem 
                          key={index}
                          // name={post.name}
                          message={post.message}
                        />
                      )
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
