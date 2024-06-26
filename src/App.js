import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './App.css';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/watch.json')
      .then((response) => response.json())
      .then((data) => setWatch(data));
  }, []);

  // const addCourse = (course) => {
  //   setCourses([...courses, { ...course, id: courses.length + 1 }]);
  // };

  // const updateCourse = (updatedCourse) => {
  //   setCourses(courses.map(course => course.id === updatedCourse.id ? updatedCourse : course));
  // };

  return (
      <div className='App'> 
        <nav>
          <Link to="/">Home</Link>
          <Link to="/watch">Add New Course</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Courses courses={courses} setCourses={setCourses} />} />
          <Route path="/add-course" element={<AddCourse addCourse={addCourse} />} />
          <Route path="/update-course/:id" element={<UpdateCourse courses={courses} updateCourse={updateCourse} />} />
        </Routes>
      </div>
  );
}

export default App;
