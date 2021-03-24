import React from "react";
import PowerStats from "../PowerStats/PowerStats";
import Col from "../Col/Col";
import Row from "../Row/Row";
import "./StatCard.css";

const StatCard = () => {
  return (
    <div>
      <div className="card card-border"  style={{backgroundColor: "transparent",   textShadow: "4px 4px 8px grey"}}>
        <div className="card-body">
          <h5 className="card-title text-white">Power Stats</h5>
          <h6 className="card-subtitle mb-2 text-white">
            Dunno what to put here
          </h6>
          <Row className="row">
            <Col size="md-4 s-4 xs-4">
              <PowerStats title="Strength" number={10} bottomNumber={5} />
              <PowerStats title="Dexterity" number={10} bottomNumber={5} />
            </Col>
            <Col size="md-4 s-4 xs-4">
              <PowerStats title="Constitution" number={10} bottomNumber={5} />
              <PowerStats title="Intelligence" number={10} bottomNumber={5} />
            </Col>
            <Col size="md-4 s-4 xs-4">
              <PowerStats title="Wisdom" number={10} bottomNumber={5} />
              <PowerStats title="Charisma" number={10} bottomNumber={5} />
            </Col>
          </Row>
          <Row>
            <Col size="md-4 s-4 xs-4">
              <PowerStats title="Armor" number={10} />
            </Col>
            <Col size="md-4 s-4 xs-4">
              <PowerStats title="Max HP" number={10} />
            </Col>
            <Col size="md-4 s-4 xs-4">
              <PowerStats title="Current HP" number={10} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
