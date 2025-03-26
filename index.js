require("dotenv").config()

const express = require('express')
const app = express()
const port = 4000

const gitData = {
    "login": "Bilal-1khan",
    "id": 121443970,
    "node_id": "U_kgDOBz0Wgg",
    "avatar_url": "https://avatars.githubusercontent.com/u/121443970?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Bilal-1khan",
    "html_url": "https://github.com/Bilal-1khan",
    "followers_url": "https://api.github.com/users/Bilal-1khan/followers",
    "following_url": "https://api.github.com/users/Bilal-1khan/following{/other_user}",
    "gists_url": "https://api.github.com/users/Bilal-1khan/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Bilal-1khan/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Bilal-1khan/subscriptions",
    "organizations_url": "https://api.github.com/users/Bilal-1khan/orgs",
    "repos_url": "https://api.github.com/users/Bilal-1khan/repos",
    "events_url": "https://api.github.com/users/Bilal-1khan/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Bilal-1khan/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Bilal Khan Suri",
    "company": "InternnCraft",
    "blog": "",
    "location": "Karachi, Pakistan ",
    "email": null,
    "hireable": true,
    "bio": "Web Developer | Frontend Developer | React JS | React",
    "twitter_username": null,
    "public_repos": 26,
    "public_gists": 0,
    "followers": 6,
    "following": 10,
    "created_at": "2022-12-26T14:22:28Z",
    "updated_at": "2025-03-12T21:42:35Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req,res)=>{
    res.send("bilalsuri")
})

app.get("/login",(req,res)=>{
    res.send("<h1>user is not logged in</h1>")
})

app.get("/youtube",(req,res)=>{
    res.send("<h2>this is my youtube route</h2>")
})

app.get("/gitRes",(req,res)=>{
    res.json(gitData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})