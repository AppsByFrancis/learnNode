const { readFile, writeFile } = require('fs');

writeFile('./testFile', 'tvoje mama', {flag : 'a'}, (err, result) => {
    if(err){
        console.log(err)
        return
    } else {
        console.log(result)
        return
    }
})

readFile('./testFile', 'utf-8',(err, result) =>{
if(err){
    console.log(err)
    return
} else {
    console.log(result)
    return
}
})
