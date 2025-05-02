// App.js
import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);

  // Load students from localStorage
  useEffect(() => {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      try {
        const parsedStudents = JSON.parse(savedStudents);
        const validStudents = parsedStudents.filter(student => 
          student.id && student.name && student.course
        );
        setStudents(validStudents);
      } catch (error) {
        console.error("Error parsing saved students:", error);
        localStorage.removeItem('students');
      }
    }
  }, []);

  // Save students to localStorage
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (name, course, picture) => {
    const newStudent = {
      id: Date.now(),
      name,
      course,
      picture: picture || null
    };
    setStudents(prevStudents => [...prevStudents, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
  };

  const clearAllStudents = () => {
    if (window.confirm("Are you sure you want to delete all students?")) {
      setStudents([]);
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-3 text-white">
          <i className="bi bi-people-fill me-2"></i>
          Student Recording System
        </h1>
        
        {students.length > 0 && (
          <button 
            onClick={clearAllStudents} 
            className="btn btn-outline-light"
          >
            <i className="bi bi-trash-fill me-2"></i>
            Clear All
          </button>
        )}
      </div>
      
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <StudentForm addStudent={addStudent} />
        </div>
      </div>
      
      <div className="mt-5">
        <StudentList students={students} deleteStudent={deleteStudent} />
      </div>
    </div>
  );
};

export default App;
