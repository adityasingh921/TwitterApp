import express from 'express'
import tweetRouter from './tweet.js';
const router = express.Router();

router.use('/tweets', tweetRouter); // Use the tweet router for /api/v2/tweets endpoint

export default router;