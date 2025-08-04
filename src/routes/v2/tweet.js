import express from 'express';

const router = express.Router(); 



// Define a route for fetching tweets
router.get('/', (req, res) => {
    return res.json({
        message: 'Fetching tweets route v2...'
        
    });
});

// Define a route for posting a new tweet
router.get('/:id', (req, res) => {
    return res.json({
        message: `Fetching tweet route v2 with ID: `,  
        id: req.params.id  
    });
});

export default router;