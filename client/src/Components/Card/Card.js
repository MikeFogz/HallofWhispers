import React from "react";
const styles = {
  cardStyles: {
    width: "18rem"
  }
}
const Card = () => {
  return (
    <div>
      <div className="card" style={styles.cardStyles}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
