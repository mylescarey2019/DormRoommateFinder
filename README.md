# DormRoommateFinder

## Full Stack website for finding/matching a compatible dorm roommate



### TO DO LIST

- [ ] create dormmate database with student table; load 10 sample students
- [ ] create server.js - with express, path - test listening port
- [ ] create htmlRoutes.js  - test /survey route;  test catch-all that goes to home.html (see hot restaurant supplimental video for how to do a catch all route)
- [ ] create apiRoutes.js 
  - [ ] create and test (Postman) GET route  /api/students  (select * from students)
    - [ ] will be used on home and survey pages (bottom of page links)
  - [ ] create and test (postman) POST route /api/students  - build in stages:
    - [ ] will need to create student.js (class)  & studentPool.js (class)
      - [ ] select * from students and create a studentPool object
    - [ ] compatibility logic method needed in studentPool (input = user, returns top 3 student matches
    - [ ] insert user into students table
    - [ ] return in res the top 3 student matches
- [ ] move on to building out the home and survey html and the home.js and survey.js

Placeholders

```html
https://loremflickr.com/320/240/student?random=3

https://loremflickr.com/320/240/college,student?random=8

http://lorempixel.com/320/240/people/?random=5
```

