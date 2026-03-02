import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 10) return;   

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <h1>Reminder Counter</h1>
      <h2>Count: {count}</h2>

      {count === 10 && (
        <h3 style={{color: "yellow"}}> Reminder! You reached 10 seconds!</h3>
      )}
    </div>
  );
}

export default Counter;