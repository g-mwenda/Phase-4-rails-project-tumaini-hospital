import { createContext, useEffect, useState } from "react";
import  Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";
export const  PatientContext = createContext()


export default function PatientProvider({children}) 
{
    const nav = useNavigate()
    const [patients, setPatients] = useState([])
    const [onChange, setonChange] = useState(true)

// Delete Post
    const deletePatient = (id) =>{
        fetch(`/patients/${id}`, {
         method: "DELETE",
                })
        .then((res)=>res.json())
        .then((response)=>{
              if(response.success)
              {
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
    // fetching posts
    useEffect(()=>{
        fetch("/patients")
        .then((res)=>res.json())
        .then((response)=>{
            setPatients(response)
            console.log("Posts ",response)
        })
    }, [onChange])

    const contextData ={
        patients, 
        deletePatient
    }

  return (
   <PatientContext.Provider value={contextData}>
    {children}
   </PatientContext.Provider>
  )
}