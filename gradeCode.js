/**
 * QUESTION
 * Input: 3 scores in an array
 * Exercise: Calculate the avg and return the grade
 * GRADE MAPPING:
 * 0-59 : F
 * 60 - 70 : D
 * 70 - 80 : C
 * 80 - 90 : B
 * 90 - 100 : A
 */

function calculateGrade(marks) {
  const avg = calculateAvergage(marks);

  if (!avg || avg < 60) return "F";
  else if (avg < 70) return "D";
  else if (avg < 80) return "C";
  else if (avg < 90) return "B";
  else return "A";
}

/**
 * Single responsibility principle
 * Seperate what is calculating avegrage
 * from
 * what is mapping to grades
 */

function calculateAvergage(marks) {
  let sum = 0;
  for (let mark of marks) sum += Number(mark);
  return Number(sum / marks.length);
}

const marks = [70, 100, 100];
console.log(calculateGrade(marks));
