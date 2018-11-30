import React from "react";

const Home = () => {
  return (
    <div>
      <div>server rendered home component</div>
      <button onClick={() => console.log("This is server rendered event!")}>click me</button>
    </div>
  );
};
export default Home;
