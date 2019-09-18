// unit testing student, studentPool

var { Student }  = require("./student.js");
var { StudentPool }  = require("./studentPool.js");

var studentArr = [];



const students = [ {name: 'Kyra', photo: 'no', answers: [1,2,3,4,5,5,2,1,5,4]},
                 {name: 'Rory', photo: 'no', answers: [5,4,3,2,1,5,2,1,5,4]},
                 {name: 'Sherman', photo: 'no', answers: [2,5,3,5,4,5,2,1,5,4]}, 
                 {name: 'Milo', photo: 'no', answers: [1,2,3,5,4,5,2,1,5,4]},  
                 {name: 'Myles', photo: 'no', answers: [5,1,1,3,1,5,2,1,5,4]}  
                 {name: 'George', photo: 'no', answers: [5,2,1,5,4,5,2,1,5,4]}, 
                 {name: 'Smokey', photo: 'no', answers: [2,3,1,3,1,5,2,1,5,4]},  
                 {name: 'Russell', photo: 'no', answers: [5,1,1,3,1,5,2,1,5,4]}            
               ];


students.map(student => studentArr.push(new Student(student.name, student.photo, student.answers)));               


// console.log(studentArr);

var studentPool = new StudentPool(studentArr);
// console.log(studentPool);
//console.log(`kyra student object:  ${JSON.stringify(studentArr[0])}`)
console.log(studentPool.findMatches(studentArr[4]));
// console.log(studentPool.findMatches([5,4,3,2,1]));


// studentArr.map(student => student.computeCompatibility([1,2,3,4,5]));

// console.log(studentArr);

// console.log(studentPool);


// console.log(students[0].name);
// console.log(students[0].photo);
// console.log(students[0].answers);

              //  const students [ {name: 'Kyra', photo: 'no', answers: [1,2,3,4,5], compatibility: 12},
              //    {name: 'Rory', photo: 'no', answers: [5,4,3,2,1], compatibility: 23},
              //    {name: 'Sherman', photo: 'no', answers: [2,5,3,5,4], compatibility: 34}, 
              //    {name: 'Milo', photo: 'no', answers: [1,2,3,5,4], compatibility: 34},  
              //    {name: 'George', photo: 'no', answers: [5,2,1,5,4], compatibility: 34}, 
              //    {name: 'Smokey', photo: 'no', answers: [2,3,1,3,1], compatibility: 34},  
              //    {name: 'Russell', photo: 'no', answers: [5,1,1,3,1], compatibility: 34}            
              //  ];

// function compare(a, b) {
//   const compatibilityA = a.compatibility;
//   const compatibilityB = b.compatibility;
  
//   let comparison = 0;
//   if (compatibilityA < compatibilityB) {
//     comparison = -1;
//   } else {
//     comparison = 1;
//   };

//   return comparison;
// };

// console.log(students.sort(compare));