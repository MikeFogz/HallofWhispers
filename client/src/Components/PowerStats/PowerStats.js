import React from 'react'

  /* display: flex;
  justify-content: center;
  align-items: center; */

const PowerStats = ({title, number, bottomNumber}) => {
  return (
    <div className="card" style={{height: "17vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
    <h6 className="card-text" style={{marginTop: "10px"}}>{title}</h6>
    <p className="numbers"style={{marginTop: "10px"}}>{number}</p>
    <p className="bottom-number"style={{marginTop: "-10px"}}>{bottomNumber}</p>
  </div>

  )
}

export default PowerStats
