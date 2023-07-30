# Career Camp Web Application

## Description

This is a web application for Team Career Camp to maintain a database of all the student interviews. The application allows employees to sign up and log in to access different functionalities. The main features of the application include managing students, interviews, and results.

## Installation and Setup

1. Clone the repository:' https://github.com/itstarvendr/Placement-Cell2.git'
2. Navigate to the project directory: `cd career-camp-app`
3. Install the dependencies: `npm install`
4. Start the application: `npm start`
## Folder Structure

The application follows the following folder structure:

- app
  - controllers
    - authController.js
    - studentController.js
    - interviewController.js
    - resultController.js
    - externalJobsController.js
  - models
    - Batch.js
    - Student.js
    - CourseScores.js
    - Interview.js
    - Results.js
  - routes
    - index.js
    - authRoutes.js
    - studentRoutes.js
    - interviewRoutes.js
    - resultRoutes.js
    - externalJobsRoutes.js
  - views
    - auth
      - signup.ejs
      - login.ejs
    - students
      - index.ejs
      - new.ejs
    - interviews
      - index.ejs
      - new.ejs
      - allocate.ejs
      - students.ejs
    - results
      - interviewStudents.ejs
    - externalJobs
      - index.ejs
  - public
    - css
      - style.css
  - app.js
- package.json
- README.md
