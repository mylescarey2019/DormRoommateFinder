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


-- To be continued   


