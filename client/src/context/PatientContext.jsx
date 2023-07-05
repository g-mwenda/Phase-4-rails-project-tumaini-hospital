import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const PatientContext = createContext();

export default function PatientProvider({ children }) {
  const [patients, setPatients] = useState([]);
  const [onChange, setOnChange] = useState(true);

  // Delete Patient
  const deletePatient = (id) => {
    fetch(`/patients/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          Swal.fire("Success", response.success, "success");
          // Update the state to remove the deleted patient
          setPatients((prevPatients) =>
            prevPatients.filter((patient) => patient.id !== id)
          );
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      });
  };

  // Archive Patient
  

  function addPatient(patientData) {
    fetch("/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patientData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire("Success", data.success, "success");
          // Clear the form after successful submission
        } else {
          Swal.fire("Error", data.error.join(", "), "error");
        }
      })
      .catch((error) => {
        Swal.fire("Error", "Something went wrong", "error");
        console.error(error);
      });
  }
  

  // Fetch patients
  useEffect(() => {
    fetch("/patients")
      .then((res) => res.json())
      .then((response) => {
        setPatients(response);
        console.log("Patients", response);
      });
  }, [onChange]);

  const contextData = {
    patients,
    deletePatient,
    addPatient
  };

  return (
    <PatientContext.Provider value={contextData}>
      {children}
    </PatientContext.Provider>
  );
}
