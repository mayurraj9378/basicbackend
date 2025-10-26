require('dotenv').config();
console.log("chai aur code by mrajg");
const express = require('express')
const app = express()
const port = 3000
const githubData=
  {
  "login": "mayurraj9378",
  "id": 148602763,
  "node_id": "U_kgDOCNt_iw",
  "avatar_url": "https://avatars.githubusercontent.com/u/148602763?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mayurraj9378",
  "html_url": "https://github.com/mayurraj9378",
  "followers_url": "https://api.github.com/users/mayurraj9378/followers",
  "following_url": "https://api.github.com/users/mayurraj9378/following{/other_user}",
  "gists_url": "https://api.github.com/users/mayurraj9378/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mayurraj9378/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mayurraj9378/subscriptions",
  "organizations_url": "https://api.github.com/users/mayurraj9378/orgs",
  "repos_url": "https://api.github.com/users/mayurraj9378/repos",
  "events_url": "https://api.github.com/users/mayurraj9378/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mayurraj9378/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Mayur-Rajgude",
  "company": null,
  "blog": "",
  "location": "Pune, Maharashtra, India",
  "email": null,
  "hireable": null,
  "bio": "AI & ML Enthusiast | Generative AI | Computer Vision | Natural Language Processing | Neural Networks | Full Stack Development ",
  "twitter_username": null,
  "public_repos": 19,
  "public_gists": 0,
  "followers": 3,
  "following": 5,
  "created_at": "2023-10-21T02:56:26Z",
  "updated_at": "2025-10-22T08:45:10Z"
}


app.get('/', (req, res) => {
  res.send('Hello World from Mayur Rajgude!')
})
app.get('/twitter',(req,res)=>{
    res.send('This is twitter endpoint')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please Login at the chai aur code webpage</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Welcome to Mayur Rajgude youtube channel</h2>')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
