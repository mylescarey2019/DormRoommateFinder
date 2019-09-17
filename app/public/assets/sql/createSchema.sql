DROP DATABASE IF EXISTS doormates;
CREATE DATABASE doormates;

USE doormates;

CREATE TABLE student (
  student_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(60) NOT NULL,
  photo VARCHAR(500) NULL,
  PRIMARY KEY(student_id)
);


CREATE TABLE survey_answer (
  survey_answer_id INT NOT NULL AUTO_INCREMENT,
  student_id INT NOT NULL,
  question_nbr SMALLINT NOT NULL,
  answer SMALLINT NOT NULL,
  PRIMARY KEY(survey_answer_id)
);

ALTER TABLE survey_answer
ADD CONSTRAINT FK_survey_answer_student
FOREIGN KEY (student_id) REFERENCES student(student_id);
