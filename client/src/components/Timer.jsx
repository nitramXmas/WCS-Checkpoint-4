import React, { useState, useEffect } from "react";

const Timer = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval;
    };
  });

  return <div>{date.toLocaleTimeString()}</div>;
};

export default Timer;
