import React from "react";
import "./StatCard.css";

const StatCard = () => {
  return (
    <div>
      <div className="card" style={{width:"100%", height: "76vh"}}>
        <div className="card-body">
          <h5 className="card-title">Power Stats</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Dunno what to put here
          </h6>
          <div className="row">
            <div className="col-4">
              <div className="card card-border image" style={{height: "17vh"}}>
                <h6 className="card-text text-center power-title">Strength</h6>
                <p className="text-center numbers">10</p>
                <p className="text-center bottom-number">5</p>
              </div>

              <div className="card card-border image" style={{height: "17vh"}}>
                <h6 className="card-text text-center power-title">Dexterity</h6>
                <p className="text-center numbers">10</p>
                <p className="text-center bottom-number">5</p>
              </div>
            </div>
            <div className="col-4">
              <div className="card card-border image" style={{height: "17vh"}}>
                <h6 className="card-text text-center power-title">Constitution</h6>
                <p className="text-center numbers">10</p>
                <p className="text-center bottom-number">5</p>
              </div>
              <div className="card card-border image" style={{height: "17vh"}}>
                <h6 className="card-text text-center power-title">Intelligence</h6>
                <p className="text-center numbers">10</p>
                <p className="text-center bottom-number">5</p>
              </div>
            </div>
            <div className="col-4">
              <div className="card card-border image" style={{height: "17vh"}}>
                <h6 className="card-text text-center power-title">Wisdom</h6>
                <p className="text-center numbers">10</p>
                <p className="text-center bottom-number">5</p>
              </div>
              <div className="card card-border image" style={{height: "17vh"}}>
                <h6 className="card-text text-center power-title">Charisma</h6>
                <p className="text-center numbers">10</p>
                <p className="text-center bottom-number">5</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 container">
              <div className="card card-border armor-image" style={{height: "12vh"}}>
                <h6 className="card-text text-center armor-title">Armor</h6>
                <p className="text-center numbers">10</p>
              </div>
            </div>
            <div className="col-4 container">
              <div className="card card-border hit-points-image" style={{height: "12vh"}}>
                <h6 className="card-text text-center power-title">Max Hit Points</h6>
                <p className="text-center numbers">10</p>
                {/* <p className="text-center">Hit Points</p> */}
              </div>
            </div>
            <div className="col-4">
              <div className="card card-border hit-points-image" style={{height: "12vh"}}>
                <h6 className="card-text text-center power-title">Current Hit Points</h6>
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
