import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

const PORT = process.env.PORT ?? 1234

const app = express()
app.use(json())
app.disable('x-powered-by')

app.use(corsMiddleware())
app.use('/movies', moviesRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`)
})