import React, { useState } from "react";

function App() {

  const now =new Date().toLocaleTimeString();
//console.log(time);
function updateTime()
{
const newTime=new Date().toLocaleTimeString();
setTime(newTime);
}

const  [time,setTime]=useState(now);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime }>Get Time</button>
    </div>
  );
}

export default App;
