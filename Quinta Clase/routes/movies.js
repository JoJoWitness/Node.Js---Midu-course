import { Router} from "express";
import { MovieModel } from "../models/mySQL/movie.js";
import { MovieController } from "../controllers/movies.js";

export const createMovieRouter = ({movieModel}) => {
const moviesRouter = Router()

const movieController = new MovieController({movieModel})

moviesRouter.get('/', movieController.getAll)
moviesRouter.get('/:id', movieController.getById)
moviesRouter.post('/', movieController.create)
moviesRouter.delete('/:id', movieController.delete)
moviesRouter.patch('/:id', movieController.patch)

return moviesRouter
}