function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}
/*
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}
*/

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getGrade(score) {
  let grade;
  if (score < 60) grade = "F";
  else if (score < 70) grade = "D";
  else if (score < 80) grade = "C";
  else if (score < 90) grade = "B";
  else if (score < 100) grade = "A";
  else grade = "A++";

  return grade;
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

//My version
function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const studentGrade = getGrade(studentScore);
  let studentResult;
  let message;
  if (hasPassingGrade(studentScore)) {
    studentResult = "passed";
  } else {
    studentResult = "failed";
  }

  message =
    "Class average: " + average + ". Your grade: " + studentGrade + ". You ";
  message = message + studentResult;
  message = message + " the course.";

  return message;
}
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
