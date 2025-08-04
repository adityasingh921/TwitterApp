import express from 'express';
import v1Router from './v1/v1Routes.js';
import v2Router from './v2/v2Routes.js';
const router = express.Router();


// Use the tweet router for  endpoint

router.use('/v1', v1Router); // Use the v1 router for /api/v1 endpoint
router.use('/v2', v2Router); // Use the v2 router for /api/v2 endpoint
export default router;