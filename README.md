# URL Shortener API

## Overview
A robust URL shortening service built with Node.js, Express, and MongoDB.

## Prerequisites
- Node.js 
- MongoDB

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/url-shortner-backend.git
cd url-shortner-backend
```

2. Install dependencies
```bash
npm install
```

3. Ensure MongoDB is running locally

4. Start the server
```bash
npm i # Production
npm start  # Development with nodemon
```

## API Endpoints

## deployed Url - https://url-shortner-backend-dmhj.onrender.com

### Shorten URL
`POST /shorten`
- Request Body: `{ "originalUrl": "https://example.com" }`
- Response: `{"shortUrl":"http://localhost:3000/Rg123fZIb","shortId":"Rg123fZIb"}`

### Redirect
`GET /:shortId`
- Redirects to the original URL

### URL Statistics
`GET /stats/:shortId`
- Response: `{"originalUrl":"https://elemental-freighter-b7f.notion.site/Backend-Task-14adef0a0c2d8042b90bdea493678751","totalClicks":5,"lastAccessedAt":"2024-11-26T18:23:45.803Z","createdAt":"2024-11-26T16:54:10.420Z"}`


Let me break down the key aspects of this URL Shortener API implementation:

0. Create .env and do copy from .env.sample

1. **Project Structure**
   - Modular design with separate concerns
   - Clear separation between routes, controllers, models, and middleware

2. **Endpoints**
   - `POST /shorten`: Creates a shortened URL
   - `GET /:shortId`: Redirects to original URL
   - `GET /stats/:shortId`: Retrieves URL statistics

3. **Database Model**
   - MongoDB schema tracks:
     - Original URL
     - Short ID
     - Click count
     - Last accessed timestamp
     - Creation timestamp

4. **Validation**
   - URL format validation using `validator` package
   - Checks for valid HTTP/HTTPS protocols
   - Prevents duplicate URL shortenings

5. **Rate Limiting**
   - Implemented with `express-rate-limit`
   - 100 requests per minute per IP
   - Prevents abuse of URL shortening service

6. **Business Logic**
   - Generates unique short IDs with `shortid`
   - Tracks and updates URL access statistics
   - Handles existing URL scenarios

7. **Error Handling**
   - Comprehensive error responses
   - Handles scenarios like invalid URLs, not found resources

To set up and run:
1. Ensure MongoDB is installed locally or Use Remote Cloud Mongodb
2. Run `npm install`
3. Start with `npm start`
