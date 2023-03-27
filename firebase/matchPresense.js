const {database} = require('./firebase')
const isMatchPresent = async(match)=>{
    const ref = database.ref('register/'+match)
    let snapshot = await ref.get()
    console.log(snapshot.val())
    if(snapshot.val()){
        console.log(snapshot.val())
        const {timestamp} = snapshot.val()
        const differ = Math.floor(Date.now() / 1000) - timestamp
        if(differ < 7)
            return true
        else 
            return false
    }else{
        return false
    }

}
module.exports = isMatchPresent

/*

    */