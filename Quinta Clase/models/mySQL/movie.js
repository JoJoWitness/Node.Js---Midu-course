import mysql from "mysql2/promise"

const config = {
  host: "localhost",
  user: 'root',
  port: "33061",
  password: "Ryuk1108",
  database: 'moviesdb'
}

const connection = await mysql.createConnection(config)


export class MovieModel{
  static async getAll ({ genre }) {
    console.log('getAll')

    if (genre) {
      const lowerCaseGenre = genre.toLowerCase()

      const [genres] = await connection.query(
        'SELECT id, name FROM genre WHERE LOWER(name) = ?;',
        [lowerCaseGenre]
      )


      if (genres.length === 0) return []

      const [{ id }] = genres
      return []
    }

    const [movies] = await connection.query(
      'SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id FROM movie;'
    )

    return movies
  }

  static async getById ({id}){
    const [movies] = await connection.query(
      `SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id
        FROM movie WHERE id = UUID_TO_BIN(?);`,
      [id]
    )

    if (movies.length === 0) return null

    return movies[0]
   
  }

  static async create ({ input }) {
    const {
      genre: genreInput, // genre is an array
      title,
      year,
      duration,
      director,
      rate,
      poster
    } = input

    // todo: crear la conexión de genre

    // crypto.randomUUID()
    const [uuidResult] = await connection.query('SELECT UUID() uuid;')
    const [{ uuid }] = uuidResult

    try {
      await connection.query(
        `INSERT INTO movie (id, title, year, director, duration, poster, rate)
          VALUES (UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?, ?);`,
        [title, year, director, duration, poster, rate]
      )
    } catch (e) {
      // puede enviarle información sensible
      throw new Error('Error creating movie')
      // enviar la traza a un servicio interno
      // sendLog(e)
    }

    const [movies] = await connection.query(
      `SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id
        FROM movie WHERE id = UUID_TO_BIN(?);`,
      [uuid]
    )

    return movies[0]
  }

  static async delete ({id}) {

    try{
      await connection.query(
        `DELETE FROM movie WHERE id = UUID_TO_BIN(?)`,
        [id]
      )
    } catch (e){
      throw new Error('Error deleting movie')
    }
   
  }

  static async update({id, input}){
    const {
      year    
    } = input

    try{
      await connection.query(
        `UPDATE movie SET year = ? WHERE id = UUID_TO_BIN(?);`,
        [year, id]
      )
    } catch (e){
      throw new Error('Error updating movie')
    }
    
}
}