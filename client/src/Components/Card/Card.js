import React from "react";
const styles = {
  cardStyles: {
    width: "100%",
    height: "100vh",
  },
};
const Card = (props) => {
  return (
    <div>
      <div className="card" style={styles.cardStyles}>
        <div className="card-body">
          <div>
            <h5 className="card-title">{props.name}</h5>
            <p className="card-subtitle mb-2 text-muted">{props.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
