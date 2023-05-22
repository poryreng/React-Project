function CreateMenu() {
    return (
        <div>
        <h2>Create New</h2>

         <a href="/create/degree"><button className="btn btn-outline-primary btn-lg m-2" role="button">Degree</button></a>
         <a href="/create/cohort"><button className="btn btn-outline-primary btn-lg m-2" role="button">Cohort</button></a>
         <a href="/create/module"><button className="btn btn-outline-primary btn-lg m-2" role="button">Module</button></a>
         <a href="/create/student"><button className="btn btn-outline-primary btn-lg m-2" role="button">Student</button></a>

        </div>
    )
  }

  export default CreateMenu;
