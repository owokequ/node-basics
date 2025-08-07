const oc = require('os')
const path = require('path')
const fs = require('fs')
const add = require('./math.js')

fs.writeFileSync(path.join(__dirname, 'notes.txt'), 'Привет как дела')

fs.appendFileSync(path.join(__dirname, 'notes.txt'), 'Добавил в файл')

add.add(2, 5)
