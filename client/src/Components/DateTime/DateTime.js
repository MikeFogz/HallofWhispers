import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(()=> setDate(new Date()))
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return <div>
    <p style={{float: "right"}}>Message Posted: {date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
  </div>;
};

export default DateTime;
