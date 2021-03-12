import React from "react";
// wrap to provide access to all of the components attributes and properties as props
const Wrapper = (props) => {
  return <main className="wrapper">{props.children}</main>;
};

export default Wrapper;