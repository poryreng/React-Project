import { useState, useEffect } from "react";


function DegreeList() {
  const [Degree, setDegree] = useState(["Degrees go here"])
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/degree")
      .then(response => response.json())
      .then(data => {
        setDegree(data.map(e => `${e.full_name} (${e.shortcode})`));
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  const displayDegree = () => {
    return Degree.map((degree) => (
      <li key={degree}>
        <a href={`/degree/${degree.substring(degree.indexOf("(") + 1, degree.indexOf(")"))}`}>
          <button className="btn btn-outline-primary m-2" role="button">
            {degree}
          </button>
        </a>
      </li>
    ))
  }




  if (isLoaded) {
    return (
        <div>
        <h2>All Degrees</h2>
        <ul className="list-group no-bullets">
          {displayDegree()}
        </ul>
      </div>

    );
  } else {
    return (
      <img src="loading.gif" alt='its loading' />
    )
  }
}

export default DegreeList;
