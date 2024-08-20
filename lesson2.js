// Write a function gradeClassifier that takes a number (0-100) representing a
// student's grade and returns a string: "A" for 90-100, "B" for 80-89, "C" for 70-79, "D" for
// 60-69, and "F" for below 60.
function gradeClassifier(grade) {
    if (grade >= 90 & grade <= 100)
        return 'A';
    else if (grade >= 80 & grade <= 89)
        return 'B';
    else if (grade >= 70 & grade <= 79)
        return 'C';
    else if (grade >= 60 & grade <= 69)
        return 'D';
    else (grade < 60)
        return 'F';
}
console.log(gradeClassifier(85)); // "B"
console.log(gradeClassifier(72)); // "C"
console.log(gradeClassifier(59)); // "F"