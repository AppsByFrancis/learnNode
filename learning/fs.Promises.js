const { readFile, writeFile } = require('fs').promises

const asyncFunc = async() => {
        try {
            await writeFile('./testFile3', 'This is my test File 3 text ');
            const second = await readFile('./testFile3', 'utf8');
            console.log(second)
        } catch(err) {
            console.log(err)
            return
        }
}
asyncFunc()