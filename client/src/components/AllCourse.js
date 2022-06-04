import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
  <>
 <div className="card">
       <div className="img"><img src={props.record.thumbnail} alt="" /></div>
       <div><h4 className="name">{props.record.name}</h4></div>
       <div className="discription">{props.record.position}</div>
       {console.log(props.record.thumbnail)}
 </div>
 </>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const records = await response.json();
      setRecords(records);
    }
  
    getRecords();
  
    return;
  }, [records.length]);
  
  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });
  
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }
  
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>All Course</h3>
     
       <div className="all-course">{recordList()}</div>
   </div>
 );
}