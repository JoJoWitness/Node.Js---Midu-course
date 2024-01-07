const os = require('node:os')

console.log("Information of the OS")
console.log("_____________________")
console.log("Name: ", os.platform())
console.log("Version: ", os.release())
console.log("Architecture: ", os.arch())
console.log("CPUs: ", os.cpus())
console.log("Free memory: ", os.freemem() / 1024 / 1024)
console.log("Total memory: ", os.totalmem() / 1024 /1024)
console.log("Uptime: ", os.uptime() / 60 / 60)