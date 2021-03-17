import React, { useEffect, useRef } from "react";
import Container from "../Container/Container";
import DateTime from "../DateTime/DateTime";
// const reactTimestamp = require("react-timestamp")
// import Timestamp from "react-timestamp"
import Row from "../Row/Row";
// import Time from "../Time/Time";
import "./PostList.css";

export function PostList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function PostListItem({ message, myAccount }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  });
  return (
    <li className={`list-group-item ${(myAccount === "true") ? "my-account" : "not-my-account"}`}>
      <Container>
        <Row>
          <p>{message}</p>
          <div ref={messagesEndRef}>
            <DateTime />
            {/* <Timestamp date={Date} style={{float: "right"}}/> */}
            {/* <Time /> */}
          </div>
        </Row>
      </Container>
    </li>
  );
}
