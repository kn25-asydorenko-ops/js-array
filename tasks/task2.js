const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];



function getTopScoringStudents(students) {
  return students.filter(student => student.score > 80).map(student => student.name);
}

function getAverageAge(students) {
  if (students.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].age;
  }
  return sum / students.length;
}

function addStudent(students, student) {
  students.push(student);
  return students;
}

function removeStudentByName(students, name) {
  return students.filter(student => student.name !== name);
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };