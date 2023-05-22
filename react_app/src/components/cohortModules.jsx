import { useState, useEffect } from "react";

function CohortModules({cohort}){
    const [modules, setModules] = useState(["Modules go here"])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        // our code goes here
        fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${cohort}`)
        .then(response=>response.json())
        .then(data=>{
            //setModules(data.map(e=>e.full_name));
            setModules(data.map(e => `${e.full_name} ${e.code}`));
            setIsLoaded(true);
        })
        .catch(err=>console.log(err));
    }, [cohort])

    const displayModules = () => {
        return modules.map((elem, index) => (
          <li key={index} className="no-bullets">
            <a href={`../../module/${elem.split(" ")[elem.split(" ").length - 1]}`}>
            <button className="btn btn-outline-primary btn-lg m-2" role="button">
              {elem}
            </button>
            </a>
          </li>
        ));
      };


if(isLoaded)
    {
        return (
        <div>
            <h1>{cohort} Modules</h1>

            {displayModules()}

        </div>
        )
    }

    else{
        return (
            <div>
            <p>
                Loading...
            </p>
        </div>
        )
    }
}

export default CohortModules;
