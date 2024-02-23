import React,{useState} from 'react';

function Autoseintragen() {
  const[speichern, setspeichern] = useState([])
  const[neuerwert, setneuerwert] = useState("")

  const refreshed = (event) => {
    setneuerwert(event.target.value);
  };
  
    
    
  return (
    <>
      <form>
        <label>
          {" "}
         Auto eintragen:
          <input  mytype="text" />
          value={neuerwert};
        </label>
      </form>
    </>
  );
}

export default Autoseintragen;
