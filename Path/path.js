const path = require("node:path")

console.log(path.sep)

const filePath = path.join("content", "subfolder", "test.txt")
console.log(filePath)

const base = path.basename("/tmp/Ryuk's-secrets/PlanForGlobalDomination.txt");
console.log(base)

const filemame = path.basename("/tmp/Ryuk's-secrets/PlanForGlobalDomination.txt", ".txt")
console.log(filemame)

const extension = path.extname("image.jpg")
console.log(extension)