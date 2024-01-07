const fs = require("node:fs")

const firstText = fs.readFileSync('./archive.txt', 'utf-8')

console.log(firstText)
console.log("I can't do anything more until the computer finish reading the first text")

const secondText = fs.readFileSync('./archive2.txt', 'utf-8')

console.log(secondText)
