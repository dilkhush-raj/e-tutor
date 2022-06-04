import React, { useState } from "react";
import { useNavigate } from "react-router";
import AllCourse from "../components/AllCourse"
 
export default function Tutor() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   thumbnail: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
// This function will handle the submission.
async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
  
    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({ name: "", position: "", thumbnail: "" });
  }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div className="page">
     <h3>Create New Course</h3>
     <form onSubmit={onSubmit} className="create-course">
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Discription</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Thumbnail URL</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.thumbnail}
           onChange={(e) => updateForm({ thumbnail: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create Course"
           className="btn btn-primary"
         />
       </div>
     </form>
     <AllCourse />
   </div>
 );
}