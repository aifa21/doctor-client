import React, { useEffect, useState } from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import SideBar from "../SideBar/SideBar";

const Prescription = () => {
  const [prescription, setPrescription] = useState([]);
  useEffect(() => {
    fetch(" https://shrouded-island-20625.herokuapp.com/prescription")
      .then((res) => res.json())
      .then((data) => setPrescription(data));
  }, []);
  return (
    <div className="dashboardSection">
      <DashboardNavbar></DashboardNavbar>

      <div className="row">
        <div className="col-md-2">
          <SideBar></SideBar>
        </div>

        <div className="dashboardContainer col-md-10 mt-3">
          <main>
            <div className="container-fluid">
              <h2 className="mb-3">Prescription</h2>
              <div className="appointmentsDataTable">
                <h3 style={{ color: "#1CC7C1" }} className="text-center mb-3">
                  All Prescription List
                </h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Medicine</th>
                      <th scope="col">Advice</th>
                    </tr>
                  </thead>

                  <tbody>
                    {" "}
                    {prescription.length > 0 ? (
                      prescription.map((prescriptions) => (
                        <tr key={prescriptions._id}>
                          <td>{prescriptions.name}</td>
                          <td>{prescriptions.email}</td>
                          <td>{prescriptions.medicine}</td>
                          <td>{prescriptions.advice}</td>
                        </tr>
                      ))
                    ) : (
                      <tr id="preloder">
                        <td className="loader"></td>
                      </tr>
                    )}{" "}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
