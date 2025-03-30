const movies = [
    { title: "Inception", year: 2010, rating: 8.8 },
    { title: "Interstellar", year: 2014, rating: 8.6 },
    { title: "The Dark Knight", year: 2008, rating: 9.0 },
    { title: "The Matrix", year: 1999, rating: 8.7 },
    { title: "Avengers: Endgame", year: 2019, rating: 8.4 },
    { title: "Joker", year: 2019, rating: 8.5 }
];

const movesYear = movies.filter((move) => move.year < 2010);
// console.log(movesYear);

const moveRating = movies.sort((a, b) => b.rating - a.rating);
// console.log(moveRating);

const tittleRating = movies.map((move) => `${move.title} ${move.rating}`);
// console.log(tittleRating);


const students = [
    { name: "Rakib", age: 20, grade: 85 },
    { name: "Ayesha", age: 22, grade: 90 },
    { name: "Tanvir", age: 19, grade: 75 },
    { name: "Sadia", age: 21, grade: 88 },
    { name: "Imran", age: 20, grade: 95 }
];

const bigStudent = students.filter((student) => student.age >= 21);
// console.log(bigStudent);

const studentList = students.sort((a, b) => b.grade - a.grade);
// console.log(studentList);

const list = students.map((student) => student.name);
// console.log(list);

const average = students.reduce((num, student) => num + student.grade, 0) / students.length;
// console.log(average);
