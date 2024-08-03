document.getElementById('gradeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mark = parseInt(document.getElementById('mark').value);
    let grade = '';
    let passed = '';

    if (mark >= 90 && mark <= 100) {
        grade = 'A+';
    } else if (mark >= 80 && mark <= 89) {
        grade = 'A';
    } else if (mark >= 70 && mark <= 79) {
        grade = 'B+';
    } else if (mark >= 60 && mark <= 69) {
        grade = 'B';
    } else if (mark >= 50 && mark <= 59) {
        grade = 'C+';
    } else if (mark >= 40 && mark <= 49) {
        grade = 'C';
    } else if (mark >= 30 && mark <= 39) {
        grade = 'D+';
    } else if (mark >= 20 && mark <= 29) {
        grade = 'D';
    } else if (mark < 20) {
        grade = 'E';
    }

    if (mark >= 30) {
        passed = 'You have passed!';
    } else {
        passed = 'You have failed!';
    }

    document.getElementById('result').innerHTML = `Your grade is: ${grade}. ${passed}`;
});