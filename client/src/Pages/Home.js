import React from "react";
import Card from "../Components/Card/Card";
import Col from "../Components/Col/Col";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import StatCard from "../Components/StatCard/StatCard";
import Wrapper from "../Components/Wrapper/Wrapper";

const Home = () => {
  return (
    <div>
      <Wrapper>
        <h1>hello from home</h1>
        <Container>
          <Col size="md-4">
            <StatCard />
          </Col>
          <Col size="md-8">
            <Row>
              <form>
                <div>
                  <input
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
        </Container>
      </Wrapper>
    </div>
  );
};

export default Home;
