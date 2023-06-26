const { readFile, writeFile } = require('fs');

readFile('./testFile', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    } else{
        console.log(result)
    }
})

writeFile('./testFile1', 'This is test file 1 ', (err, result) => {
    if(err){
        console.log(err)
        return
    } else {
        console.log('succesfully created new file')
    }
})

writeFile('./testFile1', 'Append message with "a" flag', { flag:"a" }, (err, result) => {
    if(err){
        console.log(err)
        return
    } else {
        console.log('succesfully appended second part of message :)')
    }
} )