const { readFile, writeFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, result) => {
            if(err){
                reject(err)
                return
            } else {
                console.log(result)
            }
        })
    })
}

getText('./testFile')
.then((result) => {console.log(result)})
.catch((err) => { console.log(err)})

const writeData = (path, message) => {
    return new Promise((resolve, reject) => {
        writeFile(path, message, {flag: "a"}, (err, result) => {
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

writeData('./testFile1', "this is the message using promises").catch((err) => console.log(err))