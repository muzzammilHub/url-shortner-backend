import express from 'express';
const router = express.Router();
import {
    getUrlStats,
    redirectUrl,
    shortenUrl
} from "../controller/url.js"
import { validateUrl } from '../middleware/validateUrl.js';
import { urlCreationLimiter } from '../middleware/urlCreationLimiter.js';

// Shorten URL endpoint
router.post('/shorten', 
  urlCreationLimiter, 
  validateUrl, 
  shortenUrl
);

// Redirect URL endpoint
router.get('/:shortId', redirectUrl);

// Get URL Stats endpoint
router.get('/stats/:shortId', getUrlStats);

export default router;