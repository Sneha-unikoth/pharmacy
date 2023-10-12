import axios from "axios";
import React, { useEffect, useState } from "react";

const Viewsymptoms = () => {
    const [inputs, setInputs] = useState([]);
    useEffect(() => {
     
      axios
        .get(
          ` http://127.0.0.1:8000/api/get_all_symptoms`
        )
        .then((response) => {
          if (response.data.success === true) {
            setInputs(response.data.data);
          }
        });
    }, []);
  return (
    <div>
      
      <table class="table table-success table-striped">
  

  <thead>
    <tr>
    
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Symptoms</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
  {inputs.map((data,key)=>(
    <tr>
    
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.symptoms}</td>
      <td>{data.gender}</td>
    </tr>
   
   ))}
  </tbody>
</table>

    </div>
  )
}

export default Viewsymptoms


