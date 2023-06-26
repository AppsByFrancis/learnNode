const { readFile, writeFile } = require('fs');

const readData = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, result) => {
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}
const writeData = (path, message) => {
    return new Promise((resolve, reject) => {
        writeFile(path, message, {flag: "a"}, (err, result) => {
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

const asyncFunction = async () => {
    const first = await readData('./testFile1');
    const second = await writeData('./testFile2', 'this is a message created using async function')
    console.log(first);
}
asyncFunction()  