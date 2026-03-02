function convert(grade) {
    let points;

    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
            return 0;
    }

    return points;
}

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const students = [
    { last: 'Andrus', first: 'Aaron', grade: 'A' },
    { last: 'Masa', first: 'Manny', grade: 'C' },
    { last: 'Tanda', first: 'Tamanda', grade: 'B' }
];

const studentList = document.getElementById('studentList');
const gpaOutput = document.getElementById('gpa');
const wordList = document.getElementById('wordList');

students.forEach(student => {

    const points = convert(student.grade);

    const li = document.createElement('li');

    let stars = '';
    for (let i = 0; i < points; i++) {
        stars += '⭐️';
    }

    const starSpan = document.createElement('span');
    starSpan.textContent = ` ${stars}`;
    starSpan.setAttribute('aria-label', `${points} out of 4 grade points`);

    li.textContent = `${student.first} ${student.last} - Grade: ${student.grade} - Points: ${points}`;

    li.appendChild(starSpan);

    studentList.appendChild(li);

    console.log(`${student.first} ${student.last}: ${points}`);
});


const pointsArray = students.map(student => convert(student.grade));

const totalPoints = pointsArray.reduce((total, points) => total + points, 0);

const gpa = totalPoints / students.length;

gpaOutput.textContent = `Class GPA: ${gpa.toFixed(2)}`;

console.log("Class GPA:", gpa.toFixed(2));

words.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    wordList.appendChild(li);
});