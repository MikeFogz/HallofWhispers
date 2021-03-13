import React, { useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import Col from "../Components/Col/Col";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import StatCard from "../Components/StatCard/StatCard";
import Wrapper from "../Components/Wrapper/Wrapper";
import API from "../utils/API";
import "./Home.css";

const Home = () => {
  // Setting initial state
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({});

  // loads all posts and stores them with setPosts
  useEffect(() => {
    loadPosts();
  }, []);

  // loads all posts an sets them to post
  function loadPosts() {
    API.getPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }

  // handles the changes to input post
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // form submittal
  function onSubmit(e) {
    console.log("submit");
    e.preventDefault();

    API.savePost({
      post: form.post,
    })
      .then((res) => loadPosts())
      .catch((err) => console.log(err));
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
                <form onSubmit={onSubmit}>
                  <div>
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="message"
                      className="form-control"
                      placeholder="Enter your post here"
                      aria-label="post-message"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-success"
                      type="submit"
                      id="button-addon2"
                      value="post"
                    >
                      Post
                    </button>
                  </div>
                </form>
              </Row>
              <Row>
                <Card />
              </Row>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Home;
