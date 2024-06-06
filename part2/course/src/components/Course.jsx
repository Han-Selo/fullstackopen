import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ courses }) => {
  // Calculate total exercises across all courses
  const total = courses.reduce((sum, course) => {
    return sum + course.parts.reduce((partSum, part) => {
      console.log('what is happening', partSum, part);
      return partSum + part.exercises;
    }, 0);
  }, 0);

  return (
    <div>
      {courses.map((course, courseId) => (
        <div key={courseId}>
          <Header course={course.name} />
          {course.parts.map((part, partIndex) => {
            console.log(part.name);
            return (
              <p key={partIndex}>{part.name} {part.exercises}</p>
            );
          })}
          <Content parts={course.parts} />
        </div>
      ))}
      <p>Total: {total}</p>
    </div>
  );
}

export default Course;
