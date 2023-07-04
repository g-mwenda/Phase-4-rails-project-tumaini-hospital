import React, { createContext } from "react";
import Swal from "sweetalert2";

export const AppointmentContext = createContext();

export default function AppointmentProvider({ children }) {


  function addAppointment(appointmentData) {
    fetch("/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointmentData),
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

 // Function to update an appointment


  const contextData = {
 
    addAppointment,
    
  };

  return (
    <AppointmentContext.Provider value={contextData}>
      {children}
    </AppointmentContext.Provider>
  );
}
