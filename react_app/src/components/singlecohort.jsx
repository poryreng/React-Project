import { useState, useEffect } from "react";

function SingleCohortStudents({ cohortID }) {
  const [CohortName, setCohortName] = useState('Cohort name goes here');
  const [CohortID, setCohortID] = useState("Cohort ID goes here");
  const [Students, setStudents] = useState(["Students go here"]);
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

    fetch(`http://127.0.0.1:8000/api/student/?cohort=${cohortID}`)
      .then(response => response.json())
      .then(data => {
        setStudents(data.map(e => `${e.first_name} ${e.last_name} ${e.student_id}`));
      })
      .catch(err => console.log(err));
  }, [cohortID]);

  const displayStudents = () => {
    const num = 4;
    const column = Array.from(
      { length: Math.ceil(Students.length / num) },
      (_, i) => Students.slice(i * num, (i + 1) * num)
    );

    return column.map((col, i) => {
      const sid = col.map(
        (student) => student.split(" ")[student.split(" ").length - 1]
      );


      return (
        <div className="button-col" key={i}>
          {col.map((student, index) => (
            <a href={`/student/${sid[index]}`} key={index}>
              <button className="btn btn-outline-primary m-2" role="button" key={index}>
                {student}
              </button>
            </a>
          ))}
        </div>
      );
    });
  };

  if (isLoaded) {
    return (
        <div>
        <h2>{CohortName} Students</h2>
        <div>

            <ul className="list-group no-bullets button-row">
          {displayStudents()}
            </ul>
        </div>
        </div>

    )
  } else {
    return <img src="loading.gif" alt='its loading' />;
  }
}

export default SingleCohortStudents;
