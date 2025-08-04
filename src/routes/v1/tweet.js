import express from 'express';
import { getTweets } from '../../controllers/tweetController.js';
import { getTweetById } from '../../controllers/tweetController.js';
import { createTweet } from '../../controllers/tweetController.js';
import { updateTweet } from '../../controllers/tweetController.js';
const router = express.Router(); 



// Define a route for fetching tweets
router.get('/', getTweets);

// Define a route for posting a new tweet
router.get('/:id',getTweetById);

router.post('/', createTweet); // Assuming createTweet is defined in tweetController.js
router.put('/:id', updateTweet); // Assuming updateTweet is defined in tweetController.js

export default router;