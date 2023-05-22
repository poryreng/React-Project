import { useState, useEffect } from "react";

function CohortMenu({ cohortID }) {
    const [CohortName, setCohortName] = useState('Cohort name goes here');
    const [CohortID, setCohortID] = useState("Cohort ID goes here");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/cohort/${cohortID}`)
        .then(response => response.json())
        .then(data => {
          setCohortName(data.name);
          setCohortID(data.id);
          setIsLoaded(true);
        })
        .catch(err => console.log(err));
    }, [cohortID]);

    if (isLoaded) {
      return (
        <div>
          <h2>{CohortName}</h2>
          <h4>({CohortID})</h4>
          <ul className="list-group no-bullets button-row">
            <li>
              <a href={`/cohort/${CohortID}/students`}>
                <button className="btn btn-outline-primary btn-lg m-2" role="button">
                  Students
                </button>
              </a>
            </li>
            <li>
              <a href={`/cohort/${CohortID}/modules`}>
                <button className="btn btn-outline-primary btn-lg m-2" role="button">
                  Modules
                </button>
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return <img src="loading.gif" alt='its loading' />;
    }
  }

  export default CohortMenu;
