import React from "react";

function CountdownTimer(setCountdown) {
  const [counter, setCounter] = React.useState(5);

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="App">
      <div>{counter}</div>
    </div>
  );
}

export {CountdownTimer};