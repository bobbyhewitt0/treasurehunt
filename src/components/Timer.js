import React from 'react'

function Timer() {

  const milliseconds = 1000 * 60 * 59;

const formatTime = milliseconds => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);

    return [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0")
    ].join(":");
}

const formattedTime = formatTime(milliseconds);

console.log(formattedTime);
  
  return (
    <div>
     
      
    </div>
  );
}

export default Timer;
