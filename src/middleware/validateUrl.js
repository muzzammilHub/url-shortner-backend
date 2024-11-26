import validator from "validator";

const validateUrl = (req, res, next) => {
  const { originalUrl } = req.body;

  // Check if URL is provided
  if (!originalUrl) {
    return res.status(400).json({ error: 'URL is required' });
  }

  // Validate URL format
  if (!validator.isURL(originalUrl, { 
    require_protocol: true,
    protocols: ['http', 'https'] 
  })) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  next();
};

export { validateUrl };

