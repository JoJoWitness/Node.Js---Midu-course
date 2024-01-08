
const fs = require('node:fs/promises')
const path = require('node:path')
const pico = require('picocolors')
const folder = process.argv[2] ?? '.'

async function ls (folder){
    let files
    try{
         files = await fs.readdir(folder)
    }
    catch{
        console.error(pico.red('Error while reading the directory: ', err))
        process.exit(1)
    }

    const filesPromises = files.map(async file =>{
       const filePath = path.join(folder, file)
       let stats
        try{
            stats = await fs.stat(filePath)
        }
        catch{
            console.error(pico.red('Error while reading the directory: ', err))
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? "d" : "-"
        const fileSize = stats.size.toString()
        const fileModified = stats.mtime.toLocaleString()

        return `${pico.bold(fileType)} ${pico.blue(file.padEnd(25))} ${pico.green(fileSize.padStart(10))} ${pico.yellow(fileModified)}`
    })
  
 const filesInfo = await Promise.all(filesPromises)
 filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)


