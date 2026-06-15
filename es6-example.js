//let
let studentCount = 10;
studentCount = 11;

console.log("Student Count:",studentCount);

// const
const collegeName = "VETIAS";

console.log("College Name:",collegeName);

//Template Literals
let studentName = "Arun";
console.log(`Welcome ${studentName} to ${collegeName}`);

//Object
const student = {
    name: "Ramya",
    age: 20,
    course: "CSA"
}
// Destructing
const {name, age, course}=student

console.log("Name:", name);
console.log("Age:", age);
console.log("Department:", course);

//Arrow Function
const displayStudent = () => {
    console.log('Student Name: ${name}');
    
};
displayStudent();
//Arrays
const students = [
    "Ramya",
    "Kavin",
    "Sriram",

];

console.log(students);

//Spread Operator
const updatedStudents = [
    ...students,
    "Aravindhan"
];

console.log(updatedStudents);

//Rest Operator
function maximumMarks(...marks){

    let max = Math.max(...marks);
    return max;

};

console.log("Maximum Marks:",maximumMarks(80,90,70));
//console.log(`Student Name: ${name}`);
