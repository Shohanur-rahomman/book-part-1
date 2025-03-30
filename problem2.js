const studentsObj = [
    { id: 1, name: "Rahim", age: 18, marks: { math: 80, science: 75, english: 90 } },
    { id: 2, name: "Karim", age: 19, marks: { math: 85, science: 80, english: 88 } },
    { id: 3, name: "Jamal", age: 17, marks: { math: 78, science: 72, english: 85 } }
];


const addEdStudent = (name, age, marks) => {
    const newId = studentsObj.length > 0 ? studentsObj[studentsObj.length - 1].id + 1 : 1;
    const newStudent = {id:newId, name,age,marks}
    studentsObj.push(newStudent);
}

// addEdStudent('rohim',40,{math:60,science:70,english:80});
// addEdStudent('rohim2',40,{math:60,science:70,english:80});
// console.log(studentsObj);

const getTopStudent = (studentsObj) => {
    return studentsObj.sort((a, b) => {
        const averageA = Object.values(a.marks).reduce((sum, num) => sum + num, 0) / studentsObj.length;
        const averageB = Object.values(b.marks).reduce((sum, num) => sum + num, 0) / studentsObj.length;
        return  averageB -averageA
    }).at(0)
};

// console.log(getTopStudent(studentsObj));

const calculateAverageMarks = (studentsObj) => {
    return studentsObj.map(student => {
        const totalMarks = Object.values(student.marks).reduce((sum, num) => sum + num, 0);
        const average = totalMarks / Object.keys(student.marks).length;
        const fixedAverage = parseFloat(average.toFixed(3));
        return { student: name, average: fixedAverage }
    });
};

// console.log(calculateAverageMarks(studentsObj));

const deleteStudent = (id) => {
    return studentsObj.filter((student) => student.id !== id);
};

const updatedStudents = deleteStudent(2);
// console.log(updatedStudents);
