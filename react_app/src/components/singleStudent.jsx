import { useState, useEffect } from "react";

function SingleStudent({ sid }) {
  const [studentName, setStudentName] = useState("Student Name name goes here");
  const [studentID, setStudentID] = useState("student id goes here");
  const [grades, setGrades] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/student/${sid}`)
      .then((response) => response.json())
      .then((data) => {
        setStudentName(`${data.first_name} ${data.last_name}`);
        setStudentID(`Student ID: ${data.student_id}`);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));

    fetch(`http://127.0.0.1:8000/api/grade/?student=${sid}`)
      .then((response) => response.json())
      .then((data) => {
        setGrades(data.map((e) => ({
          module: e.module.split('/').slice(-2, -1)[0],
          grade: e.total_grade.toFixed(),
          id: e.id,
        })));
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [sid]);

  const renderGradeRows = () => {
    return grades.map((grade, index) => {
      return (
        <tr key={index}>
          <td><a href={`../module/${grade.module}`}>{grade.module}</a></td>
          <td>{grade.grade}%</td>
          <td>
            <a href={`/changegrade/${grade.id}`} className="change-grade-link">
            <button className="btn btn-outline-primary m-2" role="button">
              Change Grade
              </button>
            </a>
          </td>
        </tr>
      );
    });
  };

  if (isLoaded) {
    return (
      <div>
        <h2>{studentName} ({studentID})</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Module</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>{renderGradeRows()}</tbody>
        </table>
      </div>
    );
  } else {
    return <img src="loading.gif" alt="its loading" />;
  }
}

export default SingleStudent;
