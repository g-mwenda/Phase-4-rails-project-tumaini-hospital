import { createContext, useEffect, useState } from "react";
import  Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";
export const  AuthContext = createContext()


export default function AuthProvider({children}) 
{
    const nav = useNavigate()
    const [current_user, setCurrentUser] = useState([])
    const [onChange, setonChange] = useState(true)

    function addUser(userData) {
        fetch('/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
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
      

    // Register
    const register = () =>{
     return "Register function"
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

    const contextData ={
        login, 
        register,
        logout,
        current_user,
        deleteAppointment,
        addUser,
    }

  return (
   <AuthContext.Provider value={contextData}>
    {children}
   </AuthContext.Provider>
  )
}