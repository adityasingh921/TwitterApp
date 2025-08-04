import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRoutes.js';
import connectDB from './config/dbConfig.js';

const app = express();
console.log(import.meta);
app.set('view engine', 'ejs');

app.set('views', import.meta.dirname + '/views');   // Set the views directory

app.use(morgan('combined'));

app.use(express.json()); 
app.use(express.text());
app.use(express.urlencoded());

app.use('/api/', apiRouter);   

app.get('/', (req, res) => {
    // Render the index.ejs file located in the views directory
    res.render('home'); 
});

app.get('/ping',  (req, res) => {   
    return res.json({
        message: 'pong'
    });
});

app.all('*', (req, res) => {
    return res.status(404).json({
        message: 'Not Found'
    });
});

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
    });