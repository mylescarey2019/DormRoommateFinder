--  dormmate SQL Queries

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
  

  