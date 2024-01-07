const fs = require("node:fs")


fs.readFile('./archive.txt', 'utf-8', (err, text) =>{
   console.log("first text: ", text)
})


console.log("Now, the computer can read this, even when I'm after the read file of the first archive.")

fs.readFile('./archive2.txt', 'utf-8', (err, text) =>{
    console.log("second text: ", text)
 })
 
