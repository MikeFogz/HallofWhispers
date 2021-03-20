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
// --- For authentication, allows you to stay logged in --- //
// import { useHistory } from "react-router-dom";
import AccountContext from "../Context/AccountContext";
import React, { useState, useEffect, useContext } from "react";
import image from "../Components/images/post-background.png";
import Dice from "react-dice-roll";
import socketIOClient from "socket.io-client"

const Home = () => {
  // Setting initial state for posts
  const [posts, setPosts] = useState([]);
  const [postMessage, setPostMessage] = useState("");
  // Setting inital state for chat messages
  const [messages, setMessages] = useState("");
  const [arr, setArr] = useState([]);
  const [id, setId] = useState("");

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

    axios
      .post(
        "/api/posts",
        { message: postMessage },
        { headers: { "x-auth-token": token } }
      )
      .then((res) => {
        console.log(res);
        const data = res.data;
        console.log(data);
        setPosts([...posts, data]);
      });

    // const { data } = await axios.post("/api/posts", { headers: { "x-auth-token": token }, message: postMessage });
    // console.log(data);
  };

  // loads all the posts
  useEffect(() => {
    loadPosts();
  }, []);

  // connects messages
  useEffect(() => {
    const socket = socketIOClient("http://localhost:5000", { transports: ["websocket"]});
    // connects user and sets id
    socket.on("connect", () => {
      console.log(socket.id);
      setId(socket.id);
    });
    // disconnects user
    socket.on("disconnected", () => {
      console.log("disconnected user");
    });
    // sets chat messages
    socket.on("message", (data) => {
      // console.log(data);
      setArr((arr) => [...arr, data]);
    });
  }, [])

  // sends a message
  const sendMessage = (e) => {
    e.preventDefault();

    const socket = socketIOClient("http://localhost:5000", {
      transports: ["websocket"]
    });
    socket.emit(
      "newMessage",
      {
        message: messages,
        id: id,
      },
      (data) => {
        // alert(data)
      }
    );
    // clears input field
    setMessages("");
  };

  // grabbing all the posts from the database
  function loadPosts() {
    let token = localStorage.getItem("auth-token");
    axios
      .get("/api/posts", { headers: { "x-auth-token": token } })
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      });
  }

  const { userData } = useContext(AccountContext);

  //--------------------------------------------
  //Activate this block of code when appropriate
  //Function:  If the user is not logged in, will go
  //back to the login page.

  // const history = useHistory();

  // useEffect(() => {
  //   if (!userData.account) {
  //     history.push("/login");
  //   }
  // }, [userData.account, history])

  //--------------------------------------------
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Wrapper>
        <Container>
          <Row>
            <Col size="md-6">
              <h5 style={{ textShadow: "4px 4px 8px black" }}>
                Valiant Rundis
              </h5>
              <strong style={{ textShadow: "4px 4px 8px red" }}>
                Class Level:{" "}
              </strong>
              <br />
              <strong style={{ textShadow: "4px 4px 8px red" }}>Race: </strong>
            </Col>
          </Row>
          <Row>
            <Col size="md-4">
              <StatCard />
            </Col>
            <Col size="md-4">
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
                          myAccount={
                            post.accountId === userData.account?.id
                              ? "true"
                              : "false"
                          }
                        />
                      );
                    })}
                  </PostList>
                </Card>
              </Row>
            </Col>
            <Col size="md-4">
              <div>
                <Card>
                  <div>
                    {arr.map((chat, index) => (
                      <p key={index}>
                        {chat.id}: {chat.message}
                      </p>
                    ))}
                  </div>
                </Card>
                <Container>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your message here"
                    value={messages}
                    onChange={(e) => {
                      setMessages(e.target.value);
                    }}
                  />
                  <button className="btn btn-primary" onClick={(e) => sendMessage(e)}>send</button>
                </Container>
              </div>
              <br />
              <Dice onRoll={(value) => console.log(value)} size={50} />
              <div className="container">
                <div id="dice-roll-simulator"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Home;
