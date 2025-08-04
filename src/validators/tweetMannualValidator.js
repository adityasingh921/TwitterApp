export const createTweetManualValidator = (req, res, next) => {
  if (!req.body.tweet) {
    return res.status(400).json({
      message: 'Tweet content is required'
    });
  }

if(req.body.tweet.length > 280) {
    return res.status(400).json({
        message: 'Tweet content exceeds 280 characters'
    });
}







 
  next();
}
