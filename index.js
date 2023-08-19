import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';

const app = express();
const PORT = process.env.PORT || 8000;  // Use the provided port or default to 8000

app.use(cors());
app.use(express.json());  // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded request bodies

app.use('/', router);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Database Connection
DBConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`);
        });
    })
    .catch(error => {
        console.error("Database connection error:", error);
    });
