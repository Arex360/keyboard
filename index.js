const express = require('express');
const cors = require('cors');
const register = require('./firebase/registerMatch');
const isMatchPresent = require('./firebase/matchPresense');
const app = express();
app.use(cors())
app.get('/', (req, res, next) =>{
    res.send("ok")
})
app.get('/register/:matchID', async (req, res, next)=>{
    const matchID = req.params.matchID
    const snapshot = await register({matchID:true,key:matchID})
    res.send("updated")
})
app.get('/present/:matchID', async (req, res)=>{
    const matchID = req.params.matchID
    console.log(matchID)
    const snapshot = await isMatchPresent(matchID)
    return res.send({status:snapshot})
})
app.listen(3000,()=>console.log('server started'));