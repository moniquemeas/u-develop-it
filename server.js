const express = require('express');
const { json } = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');



const PORT = process.env.Port || 3001;
const app = express();


//Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//api route
app.use('/api', apiRoutes);


//Default response for any other request (Not found)
 app.use((req, res) => {
    res.status(404).end();
 });


// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

