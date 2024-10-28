// Módulos COMMON.JS

/*  login = (username, password) => {
        if(!username && !password) return console.log("You are not autorized")
        console.log(`Welcome ${username}`)
    }

//const LIKES = 150

/*  module.exports = {
        login,
        LIKES
    }*/

module.exports.login = (username, password) => {
    if(!username && !password) return console.log("You are not autorized")
        console.log(`Welcome ${username}`)
}
module.exports.LIKES = 150