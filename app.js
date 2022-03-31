import React, { useState } from "react";
function App() {
  let ctime = new Date().toLocaleTimeString();
  const [newtime, setNewtime] = useState(ctime);
  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setNewtime(time);
    setInterval(UpdateTime);
  };
  // setInterval(UpdateTime);
  return (
    <div>
      <h1>{newtime}</h1>
      <button className="btn" onClick={UpdateTime}>
        DigitalTime
      </button>
    </div>
  );
}
export default App;
