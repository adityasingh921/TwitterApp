import express from 'express';
import morgan from 'morgan';

const app = express();
//app.use(express.json());
app.use(morgan('combined'));

app.use(express.json()); 
app.use(express.text());
app.use(express.urlencoded());

// function mid1(req, res, next){
//     console.log('mid1');
//     next(); 
// }
// function mid2(req, res, next){
//     console.log('mid2');
//     next();
// }

// function mid3(req, res, next){
//     console.log('mid3');
//     next();
// }

// function commonMiddleware(req, res, next) {
//     console.log('commonMiddleware');
//     next();
// }

// app.use(commonMiddleware);

// const middlewares = [mid1, mid2, mid3];

app.get('/ping',  (req, res) => {   
    // console.log( req.query);
    return res.json({
        message: 'pong'
    });
});

app.post('/hello',  (req, res) => {
    
    // Assuming body-parser middleware is used to parse JSON body
    console.log(req.body);

    // req.query contains query parameters if any are sent with the request
    console.log(req.query);
    // Here we just return a simple JSON response

    return res.json({
        message: 'Hello, World!'
    });
}); 

app.get('/tweets/:tweet_id/comments/:comment_id', (req, res) => {
    console.log(req.params);
    // Extracting tweet_id from the request parameters
    //const tweetId = req.params.tweet_id;
    return res.json({
        message: `Tweet ID is ${tweetId}`
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });