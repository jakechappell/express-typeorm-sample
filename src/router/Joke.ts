import { Router } from 'express';
import JokeService from '../services/JokeService';

const router = Router();
router.get('/jokes',async (req, res, next) => {
    try{
        res.send(await JokeService.getAllJokes())
    }
    catch(err){
        res.status(500).json(`${err}`)
    }
})

export default router
