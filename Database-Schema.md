# Dorm Roomate Match

## Database Schema and SQL Queries

```mysql
CREATE DATABASE `dormmates` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `student` (
  `student_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `photo` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `survey_answer` (
  `survey_answer_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `question_nbr` smallint(6) NOT NULL,
  `answer` smallint(6) NOT NULL,
  PRIMARY KEY (`survey_answer_id`),
  KEY `FK_survey_answer_student` (`student_id`),
  CONSTRAINT `FK_survey_answer_student` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=392 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


```

- Student  and Survey Answer SQL CRUD statements

  ```mysql
  -- student - answers
  SELECT s.student_id
  	    ,s.name
        ,s.photo
        ,a.survey_answer_id
        ,a.question_nbr
        ,a.answer
    FROM student AS s
    JOIN survey_answer AS a
      on s.student_id = a.student_id
   ORDER BY s.student_id
           ,a.survey_answer_id
           
  -- insert into student
  INSERT 
    INTO student 
  SELECT 0 
        ,? 
        ,?;      
  
  -- insert into survey_answer
  INSERT 
    INTO survey_answer 
  SELECT 0 
        ,? 
        ,? 
        ,?;
        
   -- update student
  UPDATE student 
     SET photo = ? 
   WHERE name = ?;
   
  -- update survey_answer
  UPDATE survey_answer 
     SET answer = ? 
   WHERE question_nbr = ? 
     AND student_id = (SELECT student_id 
                         FROM student 
                        WHERE name = ?);
    
  ```

  

  ​	

  
