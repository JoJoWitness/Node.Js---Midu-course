// const fs = require('node:fs')

// fs.readdir('../',(err, files) =>{
//     if(err){
//         console.error('Error while reading the directory: ', err)
//         return;
//     }

//     files.forEach(file =>{
//         console.log(file)
//     })
// }
// )

const fs = require('node:fs/promises')

fs.readdir('../')
    .then(files =>{
        console.log(files)
    })
    .catch(err =>{
        console.error('Error while reading the directory: ', err)
    })
