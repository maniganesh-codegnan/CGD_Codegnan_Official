import React, { useState, useEffect } from 'react';

function SalaryComponent({ salary }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < (salary) ) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 300); // Adjust the interval as needed

    // Clean up the timer
    return () => clearInterval(timer);
  }, [count, salary]);

  return (
    <div>
      {/* <h2>Salary: INR {salary} Lakhs Per Annum</h2> */}
       {count}
    </div>
  );
}

export default SalaryComponent;
