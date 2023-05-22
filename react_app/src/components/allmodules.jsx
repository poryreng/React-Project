import { useState, useEffect } from "react";


function ModuleList() {
  const [Module, setModule] = useState(["Modules go here"])
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/module/")
      .then(response => response.json())
      .then(data => {
        setModule(data.map(e => `${e.full_name}   ${e.code}`));
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  const displayModule = () => {
    const num = 3;
    const column = Array.from({ length: Math.ceil(Module.length / num) }, (_, i) =>
    Module.slice(i * num, (i + 1) * num))

    return column.map((col, i) => {
        const codes = col.map(module => module.split(' ')[module.split(' ').length - 1]);
        return (
          <div className="button-col" key={i}>
            {col.map((module, index) => (
              <a href={`/module/${codes[index]}`} key={module}>
                <button className="btn btn-outline-primary m-2" role="button">
                  {module}
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
        <h2>All Modules</h2>
        <ul className="list-group no-bullets button-row">
          {displayModule()}
        </ul>
      </div>

    );
  } else {
    return (
      <img src="loading.gif" alt='its loading' />
    )
  }
}

export default ModuleList;
