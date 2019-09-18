// class for a student object
class Student {
  constructor(name,photo,answers) {
    this.name = name;
    this.photo = photo;
    this.answers = answers;   // an array of 10 answers which are 1 to 5 ratings
    this.compatibility = 0;  // numeric score for compatibility with the user
  }

  //methods  (this should be converted to a setter)
  computeCompatibility(candidateAnswers) {
    // compare this.answers to candidateAnswers to compute compatiblity rating
    // candidateAnswers is in the form of Student.answers - an array of 10 valus 1 to 5
    // compute absolute difference of each and sum
    this.answers.map((answer,i) => {
      this.compatibility += Math.abs(answer - candidateAnswers[i]);
    })
  };
};

// module.exports for use in other .js files
module.exports = {
  Student: Student
};
