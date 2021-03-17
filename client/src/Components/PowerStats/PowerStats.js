import React from 'react'

const PowerStats = ({title, number, bottomNumber}) => {
  return (
    <div className="card" style={{height: "17vh"}}>
    <h6 className="card-text text-center">{title}</h6>
    <p className="text-center numbers">{number}</p>
    <p className="text-center bottom-number">{bottomNumber}</p>
  </div>

  )
}

export default PowerStats
