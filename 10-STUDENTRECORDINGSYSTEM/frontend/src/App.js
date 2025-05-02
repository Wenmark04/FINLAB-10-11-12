import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
      setError("Failed to fetch students. Please try again.");
    }
  };

  const addStudent = async (name, course) => {
    try {
      await axios.post("http://127.0.0.1:5000/api/students", { name, course });
      fetchStudents();
    } catch (error) {
      console.error("Error adding student:", error);
      setError("Failed to add student. Please try again.");
    }
  };

  const deleteStudent = async (id) => {
    try {
        await axios.delete(`http://127.0.0.1:5000/api/students/${id}`);
        fetchStudents(); // Refresh the list after deletion
    } catch (error) {
        console.error("Error deleting student:", error);
        setError("Failed to delete student. Please try again.");
    }
};

  return (
    <div className="App-header">
      <div className="container my-5">
        <h1 className="text-center mb-4">🎓 Student Recording System</h1>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <StudentForm addStudent={addStudent} />
        <StudentList 
          students={students} 
          onDeleteStudent={deleteStudent}  
        />
      </div>
    </div>
  );
};

export default App;