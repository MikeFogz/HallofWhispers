import React from "react";
const styles = {
  cardStyles: {
    width: "100%",
    height: "50vh",
    overflowY: "scroll",
  },
};
const Card = ({children}) => {
  return (
    <div>
      <div className="card" style={styles.cardStyles}>
        <div className="card-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
