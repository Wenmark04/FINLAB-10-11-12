// StudentList.js
import React from "react";

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div className="mt-5 text-center"> {/* Added text-center here */}
      <div className="mb-4"> {/* Simplified this div */}
        <h2 className="text-primary mb-2">Student Records</h2>
        <span className="badge bg-primary rounded-pill">
          {students.length} {students.length === 1 ? "Student" : "Students"}
        </span>
      </div>

      {students.length === 0 ? (
        <div className="text-center py-5 bg-light rounded-3">
          <i className="bi bi-people-fill text-muted" style={{ fontSize: "3rem" }}></i>
          <h4 className="mt-3">No students added yet</h4>
          <p className="text-muted">Add your first student using the form above</p>
        </div>
      ) : (
        <div className="row justify-content-center"> {/* Added justify-content-center */}
          {students.map((student) => (
            <div key={student.id} className="col-md-6 col-lg-4 d-flex justify-content-center"> {/* Added d-flex justify-content-center */}
              <div className="card h-100 border-0 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    {student.picture ? (
                      <img
                        src={student.picture}
                        alt={student.name}
                        className="rounded-circle me-3"
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                      />
                    ) : (
                      <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3"
                        style={{ width: "80px", height: "80px" }}>
                        <i className="bi bi-person-fill text-muted" style={{ fontSize: "2rem" }}></i>
                      </div>
                    )}
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-1 text-center">{student.name.toUpperCase()}</h5> {/* Added text-center */}
                      <p className="card-text text-muted mb-2 text-center">{student.course}</p> {/* Added text-center */}
                      <div className="text-center"> {/* Added wrapper div with text-center */}
                        <button
                          onClick={() => deleteStudent(student.id)}
                          className="btn btn-sm btn-outline-danger mt-2"
                        >
                          <i className="bi bi-trash-fill me-1"></i>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top-0 text-center"> {/* Changed to text-center */}
                  <small className="text-muted">
                    ID: {student.id}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentList;