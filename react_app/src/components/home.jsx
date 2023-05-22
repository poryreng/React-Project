import React from 'react';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="button-group">
      <a href="/degree"><button className="btn btn-outline-primary btn-lg m-2">Degrees</button></a>
      <a href="/cohort"><button className="btn btn-outline-primary btn-lg m-2">Cohorts</button></a>
      <a href="/module"><button className="btn btn-outline-primary btn-lg m-2">Modules</button></a>
      <a href="/create"><button className="btn btn-outline-primary btn-lg m-2">Create</button></a>
      </div>
    </div>
  );
}

export default Home;
