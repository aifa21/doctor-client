import React, { useEffect, useState } from 'react';

const DoctorList = () => {
  
    const [doctorList, setDoctorList] = useState([]);
    useEffect(() => {
      fetch(" https://shrouded-island-20625.herokuapp.com/addDoctors")
        .then((res) => res.json())
        .then((data) =>  setDoctorList(data));
    }, []);
    return (
        <div className="appointmentsDataTable">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Category</th>
                      <th scope="col">Email</th>                      
                    </tr>
                  </thead>                 
                  <tbody>
                  {
                    doctorList.map((doctorList,index)=>
                    <tr>
                      <td className="tableBody">{doctorList.name}</td>
                      <td>{doctorList.Category}</td>
                      <td>{doctorList.email}</td>
                       
                    </tr>
                    )
                }
                     </tbody>
                </table>
              </div>
    );
};

export default DoctorList;