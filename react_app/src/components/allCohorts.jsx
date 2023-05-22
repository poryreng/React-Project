import { useState, useEffect } from "react";


function CohortList() {
  const [Cohort, setCohort] = useState(["Cohorts go here"])
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cohort/")
      .then(response => response.json())
      .then(data => {
        setCohort(data.map(e => `${e.id}`));
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  const displayCohort = () => {
    // to display the buttons in rows of 4
    const num = 4;
    const column = Array.from({ length: Math.ceil(Cohort.length / num) }, (_, i) =>
    Cohort.slice(i * num, (i + 1) * num))

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
        <h2>All Cohorts</h2>
        <ul className="list-group no-bullets button-row">
          {displayCohort()}
        </ul>
      </div>

    )

  } else {
    return (
      <img src="loading.gif" alt='its loading' />
    )
  }
}

export default CohortList;
