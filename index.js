require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const githubData={
  "login": "ayushkumar306",
  "id": 270576066,
  "node_id": "U_kgDOECCpwg",
  "avatar_url": "https://avatars.githubusercontent.com/u/270576066?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ayushkumar306",
  "html_url": "https://github.com/ayushkumar306",
  "followers_url": "https://api.github.com/users/ayushkumar306/followers",
  "following_url": "https://api.github.com/users/ayushkumar306/following{/other_user}",
  "gists_url": "https://api.github.com/users/ayushkumar306/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ayushkumar306/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ayushkumar306/subscriptions",
  "organizations_url": "https://api.github.com/users/ayushkumar306/orgs",
  "repos_url": "https://api.github.com/users/ayushkumar306/repos",
  "events_url": "https://api.github.com/users/ayushkumar306/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ayushkumar306/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2026-03-24T07:29:25Z",
  "updated_at": "2026-08-18T12:36:21Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter',(req,res)=>{
    res.send('ayushdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login</h1>')
})
app.get('/youtube',(req,res)=>{
  res.send("<h2>ayush</h2>")
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});