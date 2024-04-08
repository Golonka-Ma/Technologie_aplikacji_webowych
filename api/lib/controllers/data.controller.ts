import Controller from '../interface/controller.interface';
import { Request, Response, Router } from 'express';

let testArr = [4, 5, 6, 3, 5, 3, 7, 5, 13, 5, 6, 4, 3, 6, 3, 6];

class PostController implements Controller {
    public path = '/api/post';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/latest`, this.getAll);
        this.router.post(`${this.path}/:id`, this.addData);
    }

    private getAll = async (request: Request, response: Response) => {
        response.status(200).json(testArr);
    }

    private addData = async (request: Request, response: Response) => {
        const { elem } = request.body;
        const { id } = request.params;

        testArr.push(elem);

        response.status(200).json(testArr);
    }
}

export default PostController;
