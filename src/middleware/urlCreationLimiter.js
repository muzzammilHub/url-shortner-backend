import { rateLimit } from "express-rate-limit";

const urlCreationLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many URL creation requests, please try again later.',
});

export  { urlCreationLimiter };