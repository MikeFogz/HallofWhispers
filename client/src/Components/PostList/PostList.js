import React, { useEffect, useRef } from "react";
import Container from "../Container/Container";
import Row from "../Row/Row";
import "./PostList.css"
import moment from "moment"


export function PostList({ children }) {
  return <ul className="list-group">{children}</ul>;
}


export function PostListItem({ message, date, myAccount}) {

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // newDate = moment.utc(date).local().format("LLL")
  // console.log(newDate)


  useEffect(() => {
    scrollToBottom();
  });


  return (
    <li className={`list-group-item ${(myAccount === "true") ? "my-account" : "not-my-account"}`}>
      <Container>
        <Row>
          <p>{message}</p>
          <div ref={messagesEndRef}>
            <div style={{float: "right"}}>
              <p className="timestamp">Message Posted: {moment.utc(date).local().format("LLL")}</p>
              {/* instead of "Message" we can put the Username there */}
            </div>
          </div>
        </Row>
      </Container>
    </li>
  );
}
