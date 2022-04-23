import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <Link to="/gameapp">
        <div>Game Start</div>
      </Link>
    </div>
  );
}

export default Home;
