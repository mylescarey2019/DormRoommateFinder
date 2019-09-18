// class for a pool of student objects

var { Student }  = require("./student.js");

// class for student pool
// takes a string of words and creates word pool object that manages those words
class StudentPool {
  constructor(students) {
    // constructor
    this.students = students;  // array of student objects
  }

  //methods

  // initialize by creating array of words from the wordList parameter
 
  findMatches(candidate) {
    // console.log('in StudentPool Class Object.findMatches');

    // have to iterate over this studentPool and compute each student's compatiblity relative to candidate's answers
    this.students.map(student => student.computeCompatibility(candidate.answers));
   
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

    // remove the candidate from the pool so they do not get matched with themselves
    var i = this.students.map((student,i) => {
      // if(student.name.indexOf(candidate.name) === 0) {
      if(student.name === candidate.name) {  
        matchList.splice(i,1);
      }
    });
     
    console.log(matchList);
 
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