import React from 'react'
import { useParams } from 'react-router-dom';

//TASK 5 & TASK7
const Student = () => {
    const students = [
    { id: "1", name: "Tannu", class: "BTech IT" },
    { id: "2", name: "Annu", class: "BSc CS" },
    { id: "3", name: "Prashant", class: "MCA" },
    { id: "4", name: "Priya", class: "BCom" },
    { id: "5", name: "Khushbu", class: "MBA" },
    { id: "6", name: "Naina", class: "BA English" },
    { id: "7", name: "Pooja", class: "BSc Maths" },
  ];
    const {id}=useParams()
    const student = students.find((stu) => stu.id === id);

  return (
    <div>
      {student ? (
        <>
          <h5>Student Name: {student.name}</h5>
          <h5>Class: {student.class}</h5>
        </>
      ) : (
        <h1>Student not found!</h1>
      )}
    </div>
  );
}
    


export default Student