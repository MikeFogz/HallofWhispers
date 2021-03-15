import React, { useEffect, useRef } from "react";
import Container from "../Container/Container";
import Row from "../Row/Row";


export function PostList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function PostListItem({ message, date }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  });
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <p>{message}</p>
          <div ref={messagesEndRef}>
            <div style={{float: "right"}}>
              Message Posted: {date} 
              {/* instead of "Message" we can put the Username there */}
            </div>
          </div>
        </Row>
      </Container>
    </li>
  );
}
