import express from 'express';
import tweetRouter from './tweet.js';
import commentRouter from './comment.js';
const router = express.Router();

router.use('/tweets', tweetRouter); // Use the tweet router for /api/v1/tweets endpoint
router.use('/comments', commentRouter); // Use the comment router for /api/v1/comments endpoint


export default router;