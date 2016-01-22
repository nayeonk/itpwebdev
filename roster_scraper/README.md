First save off the entire web page of students using Chrome. It should download all of the associated images. You dont have to filter down the roster at all. Just make sure you display all students at once and show ALL columns.

Save the __Student Roster.html__ page in the __roster_scraper__ directory of this application.

Save the __Student Roster_files__ folder in public/students/ as the course name (public/students/301a)

Then run:

```
cd roster_scraper
node app.js 301a
```

This will generate public/students/301a.json