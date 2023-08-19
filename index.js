import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());  // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); 
app.use('/', router);   

// New route to display "Hello, World!"
app.get("/", (req, res) => {
    res.send("Hello, World!");
  });
  



DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));