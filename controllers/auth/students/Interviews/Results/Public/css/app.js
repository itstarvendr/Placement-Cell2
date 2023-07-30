// app.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to your MongoDB database (adjust the connection string)
mongoose.connect('mongodb://localhost:27017/career-camp-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set up body-parser to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Import and use the routes
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const interviewRoutes = require('./routes/interviewRoutes');
const resultRoutes = require('./routes/resultRoutes');
const externalJobsRoutes = require('./routes/externalJobsRoutes');

app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/students', studentRoutes);
app.use('/interviews', interviewRoutes);
app.use('/results', resultRoutes);
app.use('/external-jobs', externalJobsRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
