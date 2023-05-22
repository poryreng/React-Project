import { useState, useEffect } from "react";

function SingleModule({ code }) {
  const [ModuleName, setModuleName] = useState('Module name goes here');
  const [ModuleCode, setModuleCode] = useState("Module code goes here");
  const [CaSplit, setCaSplit] = useState('CA split goes here');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/module/${code}`)
      .then(response => response.json())
      .then(data => {
        setModuleName(data.full_name);
        setModuleCode(data.code);
        setCaSplit(data.ca_split);
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  }, [code]);

  if (isLoaded) {
    return (
        <div >
        <h2>{ModuleName} ({ModuleCode})</h2>
        <h5>Continuous Assessment/Exam Split:</h5>
        <h5>{CaSplit}/{100 - CaSplit}</h5>
        <div className="mt-4">
            <h5>Back to all Modules</h5>
            <a href={`/module`}>
            <button className="btn btn-outline-primary" role="button">
              Modules
            </button>
          </a>
        </div>
        </div>

    )
  } else {
    return <img src="loading.gif" alt='its loading' />;
  }
}

export default SingleModule;
