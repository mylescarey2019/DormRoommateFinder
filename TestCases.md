# Dorm Roommate Match

## Full Stack website for finding/matching a compatible dorm roommate

## Test Cases

Functionality Cases

1. new user navigates to survey page and fully fills out profile and answers all survey questions
   1. database results
      1. new user so the profile name does not exist in database
      2. new student row is inserted to database
      3. 10 new survey answer rows are insert to database with the new student row id as foreign key
   2. survey page results
      1. three cards are populated with the 3 matches found
      2. manually validate the 3 matches are the top three compatibility calculations versus the user's survey answer set
         1. confirm these are the top 3 matches
         2. confirm the total compatiblity number matches the algorithm for each:
            1. the total compatibilty is displayed as a percentage of 100% scale - i.e. given there are 10 questions the algorith mis:  100 - (sum of 10 question differences * 2.5)   ex:  if sum of differences is 3 ==>  100 - (3 * 2.5) = 92.5%
         3. confirm the set of ten question graphics show the correct scale - i.e difference of 0 should show 100% and be green, difference 1 - 75% green, difference 2 - 50% yellow, difference 3 - 25% yellow, difference 4 - 0% red
2. existing user re-enters profile and survey - fills out same name, changes photo link and survey answers
   1. database results
      1. existing student row is found and the photo link is updated - new row is NOT inserted
      2. existing student row is found and their existing survey answer rows are found and updated - new survey answer rows are NOT inserted
   2. survey page results
      1. since existing user change survey answers it is likely they will see a different set of 3 matches and/or different order of ranking
      2. if user enters exact same survey answers expept exact same match results - unless other new users have been added to database since when user last completed the survey

3. user hits Submit but hasn't answered all survey questions
   1. expect modal pop up instructing user to finish survey
   2. expect un-answered questions to appear in read 
   3. when answered the question's red background reverts back to normal color

Edge Cases

1. user does not enter photo link
   1. a default link is loaded to the user's student row photo column  - this is from a placeholder service :  https://loremflickr.com