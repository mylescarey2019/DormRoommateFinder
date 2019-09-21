// class for a pool of student objects

var { Student }  = require("./student.js");

// class for student pool
class StudentPool {
  constructor(students) {
    // constructor
    this.students = students;  // array of student objects
  }

  //methods

  findMatches(matchUser) {
    // console.log('in StudentPool Class Object.findMatches');
    
    // refactoring the compare algorithm - example 1 via code walkthough with tutor
    // const index = this.students.reduce((closest, student, i) => {
    //   if(student.name !== matchUser.name){
    //   let current = 0;
    //   student.answers.map((num,j) => current += Math.abs(num - matchUser.answers[j]));
    //   if(closest.lowest > current){
    //     closest.lowest = current;
    //     closest.index = i;
    //   }
    // }
    //   return closest;
    // },{index: null, lowest: Infinity}).index;

    // refactoring the compare algorithm - example 2 via code walkthrough with tutor
    // const compArray = this.students.map((student, i) => {
    //   let current = 0;
    //   student.answers.map((num,j) => current += Math.abs(num - matchUser.answers[j]));
    //   return {index: i, comp: current};
    //     });
    //   compArray.sort((a,b) => a.comp - b.comp);

    // console.log('lookhere', compArray, compArray.slice(0, 3).map(({index}) => this.students[index]));



    // have to iterate over this studentPool and compute each student's compatiblity relative to matchUser's answers
    this.students.map(student => student.computeCompatibility(matchUser.answers));
   
    // compare helper function for sorting studentPool
    function compare(a, b) {
      let comparison = 0;
      if (a.compatibility < b.compatibility) {
        comparison = -1;
      } else {
        comparison = 1;
      };
      return comparison;
    };
    
    // copy of students array
    var matchList = this.students;

    // remove the matchUser from the pool so they do not get matched with themselves
    this.students.map((student,i) => {
      if(student.name === matchUser.name) {  
        
        matchList.splice(i,1);
      }
    });
     
    // sort the students in studentPool by compatibiltiy ascending because lowest score 
    // is the lowest difference in survey answers hence most compatible.
    // this.students.sort(compare);
    matchList.sort(compare);

    // return array of the top 3 student matches
    //return this.students.splice(0,3);
    return matchList.splice(0,3);
  } 

};

module.exports = {
  StudentPool: StudentPool
};