// imports
const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const posts = require('./posts.json')

// starting app
const app = express()
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json()) 

// endpoints
app.get('/posts', authenticateToken, (req, res) => {
    //console.log(posts)
    const username = req.user.name
    filteredPosts = posts.posts.filter(post => post.name == username)
    //console.log(filteredPosts)
    res.json(filteredPosts)
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] //bearer Token
    if (token == null) {
        return res.sendStatus(401)
    } 
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => { // callback
            if (err) {
                return res.sendStatus(403)
            }
            req.user = user
            next()
        })
}

app.post('/login', (req, res) => {
    const username = req.body.username
    const user = { name: username }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken : accessToken})
})

app.listen(3000)
