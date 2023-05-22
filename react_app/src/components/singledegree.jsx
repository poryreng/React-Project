import { useState, useEffect } from "react";

function SingleDegree({ shortcode }) {
  const [degree, setDegree] = useState('Degree goes here');
  const [shortCode, setShortCode] = useState("Shortcode goes here");
  const [Cohort, setCohort] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/degree/${shortcode}`)
      .then(response => response.json())
      .then(data => {
        setDegree(data.full_name);
        setShortCode(data.shortcode);
        setIsLoaded(true);
      })
      .catch(err => console.log(err));

    fetch(`http://127.0.0.1:8000/api/cohort/?degree=${shortcode}`)
      .then(response => response.json())
      .then(data => {
        setCohort(data.map(e => `${e.id}`));
      })
      .catch(err => console.log(err));
  }, [shortcode]);

  const displayCohort = () => {
    const num = 1;
    const cohortColumn = 4;
    const column = Array.from({ length: num }, (_, i) =>
    Cohort.slice(i * cohortColumn, (i + 1) * cohortColumn))

    return column.map((col, i) => (
        <div className="button-col" key={i}>
          {col.map((Cohort) => (
            <a href={`/cohort/${Cohort}`}>
            <button className="btn btn-outline-primary m-2" role="button" key={Cohort}>
              {Cohort}
            </button>
            </a>
          ))}
        </div>
      ))
    }

  if (isLoaded) {
    return (
        <div>
        <h2>{degree} ({shortCode})</h2>
        <div>
            <p>Cohorts</p>
            <ul className="list-group no-bullets button-row">
          {displayCohort()}
            </ul>
        </div>
        </div>

    )
  } else {
    return <img src="loading.gif" alt='its loading' />;
  }
}

export default SingleDegree;
