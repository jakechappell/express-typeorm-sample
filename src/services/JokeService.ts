import { AppDataSource } from "../data-source";
import { Jokes } from "../entity/JokeEntity";

class JokeService{
    async getAllJokes(){
        const data = AppDataSource
        const JokeRepo = data.getRepository(Jokes)
        return await JokeRepo.find()
    }
}

export default new JokeService();