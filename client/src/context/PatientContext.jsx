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
  const archivePatient = (patientId) => {
    fetch(`/patients/archive/${patientId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          Swal.fire("Success", data.success, "success").then(() => {
            // Update the state to remove the archived patient
            setPatients((prevPatients) =>
              prevPatients.filter((patient) => patient.id !== patientId)
            );
            setOnChange(!onChange);
          });
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      })
      .catch((error) => {
        console.error(
          "Error occurred while updating patient archive status",
          error
        );
      });
  };

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
    archivePatient,
  };

  return (
    <PatientContext.Provider value={contextData}>
      {children}
    </PatientContext.Provider>
  );
}
