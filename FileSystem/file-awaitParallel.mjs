import {readFile} from "node:fs/promises"
import { text } from "stream/consumers"

Promise.all([
    readFile('./archive.txt', 'utf-8'),
    readFile('./archive2.txt', 'utf-8')
]).then(([text, secondtext]) =>{
    console.log('First text: ', text)
    console.log('Second text: ', secondtext)
})