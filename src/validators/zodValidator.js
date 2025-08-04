export const validate = (schema) => {
  return async (req, res, next) => {
    try {
      console.log('Validating request body:', req.body);
      schema.parse(req.body);
      next();
    }catch (error) {
     // console.error('Validation error:', error);
      return res.status(400).json({
        message: 'Validation failed',
        success: false,
        errors: error.errors,

      });
    }
    
  };
}