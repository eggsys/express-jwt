const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
app.use(express.json())

const posts = [
    {
        username: 'Rungkrit',
        title: 'Post 1'
    },
    {
        username: 'Rungruj',
        title: 'Post 2'
    }
]
app.get('/post', (req, res) => {
    console.log("Posts")
    res.json(posts)
    res.send("ok!")
})

app.listen(5000)