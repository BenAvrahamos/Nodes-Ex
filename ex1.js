
import fs from 'fs'
import ms from 'ms'

ReadTime()

function ReadTime() {
    fs.readFile('about-time.txt', 'utf8', (err, contents) => {
        if (err) return console.log('Cannot read file')
        const times = contents.split('\n')
        times.forEach(time =>console.log(ms(+time, { long: true })))
    })
    console.log('after calling readFile')
}
