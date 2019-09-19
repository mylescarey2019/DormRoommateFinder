-- insert students
INSERT INTO student (name,photo)
VALUES('Logan Smith','http://lorempixel.com/320/240/people/'),
      ('Isabella Garcia','http://lorempixel.com/320/240/people/'),
      ('Evelyn Davis','http://lorempixel.com/320/240/people/'),
      ('Sebastian Lopez','http://lorempixel.com/320/240/people/'),
      ('Ella Anderson','http://lorempixel.com/320/240/people/'),
      ('Jackson Miller','http://lorempixel.com/320/240/people/'),
      ('Kyra Young','http://lorempixel.com/320/240/people/'),
      ('Carter Scott','http://lorempixel.com/320/240/people/'),
      ('Zoey Lee','http://lorempixel.com/320/240/people/'),
      ('Asher Tran','http://lorempixel.com/320/240/people/'),
      ('Leah Black','http://lorempixel.com/320/240/people/'),
      ('Nathan Wright','http://lorempixel.com/320/240/people/');
      
-- insert student answers
INSERT INTO survey_answer (student_id,question_nbr,answer)
VALUES (1,1,2),  (1,2,3),   (1,3,4),   (1,4,5),   (1,5,5),   (1,6,2),   (1,7,5),   (1,8,4),   (1,9,4),   (1,10,3),

(2,1,4),  (2,2,1),   (2,3,1),   (2,4,1),   (2,5,5),   (2,6,4),   (2,7,3),   (2,8,1),   (2,9,2),   (2,10,2),

(3,1,4),  (3,2,1),   (3,3,2),   (3,4,3),   (3,5,3),   (3,6,3),   (3,7,1),   (3,8,3),   (3,9,5),   (3,10,1),

(4,1,3),  (4,2,4),   (4,3,4),   (4,4,3),   (4,5,1),   (4,6,3),   (4,7,4),   (4,8,2),   (4,9,1),   (4,10,5),

(5,1,4),  (5,2,2),   (5,3,5),   (5,4,4),   (5,5,2),   (5,6,2),   (5,7,5),   (5,8,5),   (5,9,4),   (5,10,3),

(6,1,4),  (6,2,5),   (6,3,3),   (6,4,5),   (6,5,4),   (6,6,1),   (6,7,2),   (6,8,1),   (6,9,2),   (6,10,2),

(7,1,1),  (7,2,5),   (7,3,1),   (7,4,2),   (7,5,3),   (7,6,5),   (7,7,4),   (7,8,3),   (7,9,3),   (7,10,2),

(8,1,5),  (8,2,5),   (8,3,5),   (8,4,3),   (8,5,4),   (8,6,3),   (8,7,3),   (8,8,2),   (8,9,4),   (8,10,5),

(9,1,5),  (9,2,2),   (9,3,2),   (9,4,1),   (9,5,2),   (9,6,2),   (9,7,4),   (9,8,5),   (9,9,2),   (9,10,4),

(10,1,3),  (10,2,3),   (10,3,3),   (10,4,4),   (10,5,1),   (10,6,4),   (10,7,1),   (10,8,1),   (10,9,3),   (10,10,1),

(11,1,1),  (11,2,4),   (11,3,1),   (11,4,3),   (11,5,2),   (11,6,3),   (11,7,2),   (11,8,2),   (11,9,4),   (11,10,2),

(12,1,4),  (12,2,1),   (12,3,5),   (12,4,2),   (12,5,5),   (12,6,1),   (12,7,3),   (12,8,3),   (12,9,1),   (12,10,5);


UPDATE student
   SET photo = "https://loremflickr.com/320/240/college,student?random=1"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 1;

UPDATE student
   SET photo = "https://loremflickr.com/320/240/college,student?random=55"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 2;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240/college,student?random=100"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 3;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240/college,student?random=200"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 4;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240/college,student?random=300"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 5;

UPDATE student
   SET photo = "https://loremflickr.com/320/240/student?random=400"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 6;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240college,student?random=500"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 7;
 
UPDATE student
   SET photo = "https://loremflickr.com/320/240/college,student?random=600"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 8;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240/student?random=700"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 9;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240/college,student?random=800"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 10;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240/college,student?random=900"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 11;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240/student?random=1000"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 12;




USE dormmates;

UPDATE student
   SET photo = "https://loremflickr.com/320/240/student,college?random=1333"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 1;

UPDATE student
   SET photo = "https://loremflickr.com/320/240/student,college?random=55"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 2;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240/student,college?random=100"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 3;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240/student,college?random=200"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 4;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240/student,college?random=300"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 5;

UPDATE student
   SET photo = "https://loremflickr.com/320/240/student,college?random=400"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 6;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240/student,college?random=500"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 7;
 
UPDATE student
   SET photo = "https://loremflickr.com/320/240/student,college?random=600"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 8;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240/student,unversity?random=700"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 9;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240/student,university?random=800"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 10;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240/student,college?random=900"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 11;
 
 UPDATE student
   SET photo = "https://loremflickr.com/320/240/student,university?random=1000"
   -- SET photo = 'http://lorempixel.com/320/240/people/'
 WHERE student_id = 12;

