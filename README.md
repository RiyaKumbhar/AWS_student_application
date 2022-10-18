# AWS_student_application

After creating App.js and other files as required
CREATE FOLDER NAMED NODEJS IN PUBLIC
OPEN TERMINAL (RUN FOLLWING COMMANDS):
> npm init
package name: (nodejs) --------------- > (press enter from here till terminal exits the execution)
.
.
.
Is this OK? (yes) --------------------->(press enter)
>npm install express body-parser cors mysql

---------------------------------------------------------------------------------------------------

Getting Started with the application

Step 1 : Start the sever in terminal
        - Open terminal to "/Server" directory
        - Type -| npm start devStart |- in the terminal and press enter and let the server start
        - After server starts perform Step 2

Step 2 : Start the react App
        - Start the react app by -| npm start |- command in the terminal open in "/confirmation" directory
        - Now wait for application to start. 


Backend liberaries used in this project are: 

- express
- body-parser
- cors
- Axios
- mysql

Technology used in this project  : 

- ReactJs (v18.2.0)
- NodeJs (v16.17.1)
- npm (v8.15.0)
- AWS RDS -- MySql


Application specifications :

Front End - ReactJs
Backend - NodeJs
Server - NODEJS
DATABASE - AWS RDS - MySql




Information about the DATABASE :

DATABASE TYPE : MySql DATABASE
DATABASE name : students
DATABASE table : student(fname,lname,roll_no,branch)


Features of the application : 

ADD NEW STUDENT DATA
UPDATE EXISTING STUDENT DATA
DELETE EXISTING STUDENT DATA
DISPLAY ALL THE EXSTING STUDENT IN THE DATABASE IN TABLE FORM
