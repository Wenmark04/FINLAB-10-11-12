// src/components/StudentForm.js
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !course) {
      setMessage("Please fill in all fields.");
      setError(true);
      return;
    }
    await addStudent(name, course);
    setName("");
    setCourse("");
    setMessage("Student added successfully!");
    setError(false);
  };

  return (
    <div className="card p-4 shadow-sm mb-4 bg-white bg-opacity-75">
      <h3 className="card-title">Add New Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Add Student
        </button>
      </form>
      {message && (
        <div className={`alert mt-3 ${error ? "alert-danger" : "alert-success"}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default StudentForm;