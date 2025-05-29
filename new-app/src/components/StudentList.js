import React from "react";

// Приклад масиву студентів
const students = [
  {
    name: "Іваненко Іван",
    marks: { математика: 90, фізика: 85, інформатика: 95 }
  },
  {
    name: "Петренко Марія",
    marks: { математика: 78, фізика: 82, інформатика: 88 }
  },
  {
    name: "Коваленко Олег",
    marks: { математика: 92, фізика: 91, інформатика: 89 }
  }
];

// Функція для розрахунку середнього балу одного студента
const getAverage = (marks) => {
  const values = Object.values(marks);
  const total = values.reduce((acc, val) => acc + val, 0);
  return (total / values.length).toFixed(2);
};

const StudentList = () => {
  const groupAvg = (
    students.reduce(
      (sum, student) => sum + parseFloat(getAverage(student.marks)),
      0
    ) / students.length
  ).toFixed(2);

  return (
    <div>
      <h2>Список студентів</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Ім’я</th>
            <th>Оцінки</th>
            <th>Середній бал</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <tr key={i}>
              <td>{student.name}</td>
              <td>
                {Object.entries(student.marks).map(([subject, mark]) => (
                  <div key={subject}>
                    {subject}: {mark}
                  </div>
                ))}
              </td>
              <td>{getAverage(student.marks)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p><strong>Середній бал групи:</strong> {groupAvg}</p>
    </div>
  );
};

export default StudentList;
