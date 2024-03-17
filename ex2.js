import fs from 'fs'

function readData(data) {
    return new Promise((resolve, reject) => {
        
        fs.readFile(data, 'utf8', (err, contents) => {
            if (err) return console.log('Cannot read file')
            
            const lines = contents.split('\n')
            const total = lines.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            resolve(total)
        })
    })
}

function sumFromFile(file) {
    readData(file)
    .then(sum => console.log('Sum:', sum))
    .catch(err => console.log('Cannot sum:', err))
}

sumFromFile('about-time.txt')