// Common modules JS
// default
// can have several defaults. but it replaced with the latest exports
// Not like in react. In react we can have only one default. 
// if more than one it willl give us error
// To export more than one we can have named exports
// can export objects
module.exports = {address: '123', age:22}

module.exports = {address: '123, London', age : 32}


// can export functions

module.exports.namedFunction = function (a,b) {
    return a+b
}

// can export values

module.exports.anyname = 3;