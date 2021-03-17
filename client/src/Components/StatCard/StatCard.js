import React from "react";
import "./StatCard.css";
const styles = {
  cardStyle: {
    width: "100%",
    height: "72vh",
  },
};
const StatCard = () => {
  return (
    <div>
      <div className="card" style={styles.cardStyle}>
        <div className="card-body">
          <h5 className="card-title">Power Stats</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Dunno what to put here
          </h6>
          <div className="row">
            <div className="col-4">
              <div className="card">
                <h6 className="card-text text-center">Strength</h6>
                <p className="text-center numbers">10</p>
                <p className="text-center">5</p>
              </div>
              <div className="card">
                <h6 className="card-text text-center">Dexterity</h6>
                <p className="text-center numbers">10</p>
                <p className="text-center">5</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h6 className="card-text text-center">Constitution</h6>
                <p className="text-center numbers">10</p>
                <p className="text-center">5</p>
              </div>
              <div className="card">
                <h6 className="card-text text-center">Intelligence</h6>
                <p className="text-center numbers">10</p>
                <p className="text-center">5</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h6 className="card-text text-center">Wisdom</h6>
                <p className="text-center numbers">10</p>
                <p className="text-center">5</p>
              </div>
              <div className="card">
                <h6 className="card-text text-center">Charisma</h6>
                <p className="text-center numbers">10</p>
                <p className="text-center">5</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <h6 className="card-text text-center">Armor</h6>
                <p className="text-center numbers">10</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h6 className="card-text text-center">Max Hit Points</h6>
                <p className="text-center numbers">10</p>
                {/* <p className="text-center">Hit Points</p> */}
              </div>
            </div>
            <div className="col-md-4">
            <div className="card">
                <h6 className="card-text text-center">Current Hit Points</h6>
                <p className="text-center numbers">10</p>
                {/* <p className="text-center">Hit Points</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
