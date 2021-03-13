import React from "react";
import Container from "../Container/Container";
import Row from "../Row/Row";

export function PostList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function PostListItem({ message }) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          {/* <div className="card" style={{ width: "100%" }}>
            <div className="card-body"> */}
              <p>{message}</p>
            {/* </div>
          </div> */}
        </Row>
      </Container>
    </li>
  );
}
