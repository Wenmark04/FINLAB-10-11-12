// StudentForm.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [picture, setPicture] = useState(null);
  const [preview, setPreview] = useState("");

  const courseOptions = ["BSIT", "BSCS", "BSBA", "BSA", "BSED", "BSN", "BSEE"];

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPicture(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && course) {
      addStudent(name, course, preview);
      setName("");
      setCourse("");
      setPicture(null);
      setPreview("");
    }
  };

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body p-4">
        <h3 className="card-title mb-4 text-primary">Add New Student</h3>
        <form onSubmit={handleSubmit}>
          {/* Student Name Input */}
          <div className="mb-3">
            <label htmlFor="studentName" className="form-label fw-semibold">
              Student Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="studentName"
              placeholder="Enter student name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Course Dropdown */}
          <div className="mb-3">
            <label htmlFor="courseSelect" className="form-label fw-semibold">
              Course
            </label>
            <select
              className="form-select form-select-lg"
              id="courseSelect"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a course
              </option>
              {courseOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Picture Upload */}
          <div className="mb-4">
            <label htmlFor="picture" className="form-label fw-semibold">
              School Logo
            </label>
            <input
              type="file"
              className="form-control form-control-lg"
              id="picture"
              accept="image/*"
              onChange={handlePictureChange}
            />
            {preview && (
              <div className="mt-3 text-center">
                <img
                  src={preview}
                  alt="Preview"
                  className="img-thumbnail rounded-circle"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <p className="text-muted mt-2 small">Image Preview</p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary btn-lg fw-bold py-3"
            >
              <i className="bi bi-person-plus-fill me-2"></i>
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
