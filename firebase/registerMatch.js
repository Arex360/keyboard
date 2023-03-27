const {database} = require('./firebase')
const register = async ({matchID,key})=>{
    const ref = database.ref('register/'+key)
    const snapshot = await ref.set({timestamp: Math.floor(Date.now() / 1000)})
}
module.exports = register