import { createContext, useEffect, useState } from "react";
import  Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";
export const  AuthContext = createContext()


export default function AuthProvider({children}) 
{
    const nav = useNavigate()
    const [current_user, setCurrentUser] = useState([])
    const [onChange, setonChange] = useState(true)
    const [users, setUsers] = useState([]);

    function addUser(userData) {
        fetch('/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              nav("/account/dashboard")
              Swal.fire('Success', 'User added successfully!', 'success');
              // Clear the form after successful submission
            } else {
              Swal.fire('Error', data.error.join(', '), 'error');
            }
          })
          .catch((error) => {
            Swal.fire('Error', 'Something went wrong', 'error');
            console.error(error);
          });
      }
      
    // Login
    const login = (email, password) =>{
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email, password})
        })
        .then((res)=>res.json())
        .then((response)=>{
            console.log(response)
            if(response.error)
            {
                Swal.fire(
                    'Error',
                    response.error,
                    'error'
                  )
            }
            else if(response.success)
            { 
                nav("/account/dashboard")
                Swal.fire(
                    'Success',
                    response.success,
                    'success'
                  )
                  setonChange(!onChange)
            }
            else{
                Swal.fire(
                    'Error',
                    "Something went wrong",
                    'error'
                  )
            }

        })
    }

    // Logout
    const logout = () =>{
       fetch("/logout", {
        method: "DELETE",
               })
       .then((res)=>res.json())
       .then((response)=>{
        setCurrentUser()
        setonChange(!onChange)
        if(response.error)
            {
                Swal.fire(
                    'Error',
                    response.error,
                    'error'
                  )
            }
            else if(response.success)
            { 
                nav("/account/login")
                Swal.fire(
                    'Success',
                    response.success,
                    'success'
                  )
                  setonChange(!onChange)
            }
            else{
                Swal.fire(
                    'Error',
                    "Something went wrong",
                    'error'
                  )
            }
       })
    }

    const deleteAppointment = (id) => {
        fetch(`/appointments/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((response) => {
            if (response.success) {
              Swal.fire("Success", response.success, "success");
              // Update the state to remove the deleted appointment
              setCurrentUser((prevUser) => {
                const updatedAppointments = prevUser.appointments.filter(
                  (appointment) => appointment.id !== id
                );
                return { ...prevUser, appointments: updatedAppointments };
              });
            } else {
              Swal.fire("Error", "Something went wrong", "error");
            }
          });
      };
      

      function updateAppointment(id, appointmentData) {
        fetch(`/appointments/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(appointmentData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              nav("/account/dashboard")
              Swal.fire("Success", data.success, "success");
              // Update the current_user state with the updated appointment
              setCurrentUser((prevUser) => {
                const updatedAppointments = prevUser.appointments.map((appointment) => {
                  if (appointment.id === id) {
                    return { ...appointment, ...appointmentData };
                  }
                  return appointment;
                });
                return { ...prevUser, appointments: updatedAppointments };
              });
            } else {
              Swal.fire("Error", data.error.join(", "), "error");
            }
          })
          .catch((error) => {
            Swal.fire("Error", "Something went wrong", "error");
            console.error(error);
          });
      }


      function updatePatient(id, patientData) {
        fetch(`/patients/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(patientData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              nav("/account/dashboard")
              Swal.fire("Success", data.success, "success");
              // Update the current_user state with the updated patient
              setCurrentUser((prevUser) => {
                const updatedPatients = prevUser.patients.map((patient) => {
                  if (patient.id === id) {
                    return { ...patient, ...patientData };
                  }
                  return patient;
                });
                return { ...prevUser, patients: updatedPatients };
              });
            } else {
              Swal.fire("Error", data.error.join(", "), "error");
            }
          })
          .catch((error) => {
            Swal.fire("Error", "Something went wrong", "error");
            console.error(error);
          });
      }

    useEffect(()=>{
        console.log("Error")
        fetch("/current_user")
        .then((res)=>res.json())
        .then((response)=>{
            setCurrentUser(response)
            console.log("Current user ",response)
        })
    }, [onChange])

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
              setCurrentUser((prevUser) => {
                const updatedPatients = prevUser.patients.filter(
                  (patient) => patient.id !== patientId
                );
                return { ...prevUser, patients: updatedPatients };
              });
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
    
    
  const changePassword = (userId, currentPassword, newPassword) => {
    // Send a request to the server to change the password
    fetch(`/changepassword/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        current_password: currentPassword,
        new_password: newPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          nav("/account/dashboard")
          Swal.fire('Success', data.success, 'success');
        } else {
          Swal.fire('Error', data.error, 'error');
        }
      })
      .catch((error) => {
        Swal.fire('Error', 'Something went wrong', 'error');
        console.error(error);
      });
  };

    useEffect(() => {
        fetch("/users")
          .then((res) => res.json())
          .then((response) => {
            setUsers(response);
            console.log("Patients", response);
          });
      }, [onChange]);

    const contextData ={
        login, 
        logout,
        current_user,
        deleteAppointment,
        addUser,
        users,
        updateAppointment,
        updatePatient,
        archivePatient,
        changePassword
    }

  return (
   <AuthContext.Provider value={contextData}>
    {children}
   </AuthContext.Provider>
  )
}