import './App.css';
import DegreeList from './components/degree';
import NavBar from './components/navbar';
import Home from './components/home';
import SingleDegree from './components/singledegree';
import CohortList from './components/allCohorts';
import ModuleList from './components/allmodules';
import CreateMenu from './components/createMenu';
import DegreeForm from './components/createDegree';
import CohortForm from './components/createCohort';
import ModuleForm from './components/createModule';
import SingleModule from './components/singleModule';
import SingleStudent from './components/singleStudent';
import StudentForm from './components/createStudent';
import SingleCohortStudents from './components/singlecohort';
import CohortMenu from './components/cohortMenu';
import CohortModules from './components/cohortModules';
import GradeForm from './components/setGrades';

function App() {
  let component;
  let param = window.location.pathname.split("/")[2];
  switch(window.location.pathname){
    case "/":
      component = <Home/>;
      break;
    case "/degree":
      component = <DegreeList/>;
      break;
    case `/degree/${param}`:
      component = <SingleDegree shortcode={param}/>;
      break;
    case "/cohort":
      component = <CohortList/>;
      break;
    case `/cohort/${param}`:
      component = <CohortMenu cohortID={param}/>;
      break;
    case `/cohort/${param}/students`:
      component = <SingleCohortStudents cohortID={param}/>;
      break;
    case `/cohort/${param}/modules`:
      component = <CohortModules cohort={param}/>;
      break;
    case `/module`:
      component = <ModuleList/>;
      break;
    case `/module/${param}`:
      component = <SingleModule code={param}/>;
      break;
    case `/student/${param}`:
      component = <SingleStudent sid={param}/>;
      break;
    case `/create`:
      component = <CreateMenu/>;
      break;
    case `/create/degree`:
      component = <DegreeForm/>;
      break;
    case `/create/cohort`:
      component = <CohortForm/>;
      break;
    case `/create/module`:
      component = <ModuleForm/>;
      break;
    case `/create/student`:
      component = <StudentForm/>;
      break;
    case `/changegrade/${param}`:
      component = <GradeForm GradeID={param}/>;
      break;

  }


  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      {component}
      </header>
    </div>
  );
}

export default App;
