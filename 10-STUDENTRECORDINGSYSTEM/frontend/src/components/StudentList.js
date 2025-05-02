// src/components/StudentList.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentList = ({ students, onDeleteStudent }) => {
  return (
    <div className="card p-4 shadow-sm bg-white bg-opacity-75">
      <h2 className="card-title">Student List</h2>
      {students.length === 0 ? (
        <p className="text-muted">No students added yet.</p>
      ) : (
        <ul className="list-group list-group-flush">
          {students.map((student) => (
            <li key={student.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{student.name}</strong>
                <span className="ms-2 badge bg-primary rounded-pill">{student.course}</span>
              </div>
              <button 
                onClick={() => onDeleteStudent(student.id)}
                className="btn btn-outline-danger btn-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;