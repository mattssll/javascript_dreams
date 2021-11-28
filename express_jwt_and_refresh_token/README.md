# Express JWT and Refresh Token Small App
Welcome.

## Starting a JS Project from scratch
1. Start a new project with npm
```
npm install -y
```
2. Install dependencies
```
npm i express jsonwebtoken dotenv 
```
And a dev dependency (nodemon) to save code and refresh app
```
npm i --save-dev nodemon
```
3. Create a script to start our server in package.json in "scripts":
```
"scripts": {
    "dev": "nodemon server.js"
    ... whatever else is there
}
```
4. Then to start the server:
```
npm run dev
```

5. To get ACCESS_TOKEN_SECRET and REFRESH_TOKEN_SECRET
In another terminal, run two times, grab each token for each needed .env var:
```
node
require('crypto').randomBytes(64).toString('hex')
```

6. To test the jwt token you gotta:
Login with the POST request, get the token, put it in the GET request, and get the filtered posts
<br>
<br>Credits: Web Dev Simplified:<br> https://www.youtube.com/watch?v=mbsmsi7l3r4&ab_channel=WebDevSimplified