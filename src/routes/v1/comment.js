import express from 'express';

const router = express.Router(); 



// Define a route for fetching tweets
router.get('/', (req, res) => {
    return res.json({
        message: 'Fetching tweets  comment ...'
        
    });
});

// Define a route for posting a new tweet
router.get('/:id', (req, res) => {
    return res.json({
        message: `Fetching comment tweet with ID: ${req.params.id}`    
    });
});

export default router;