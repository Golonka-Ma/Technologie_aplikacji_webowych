import Controller from '../interface/controller.interface';
import { Request, Response, NextFunction, Router } from 'express';

let testArr = [4,5,6,3,5,3,7,5,13,5,6,4,3,6,3,6];

class DataController implements Controller {
   public path = '/api/data';
   public router = Router();

   constructor() {
       this.initializeRoutes();
   }

   private initializeRoutes() {
       this.router.get(`${this.path}/latest`, this.getLatestData);
       this.router.get(`${this.path}/:id`, this.getPostById);
       this.router.post(`${this.path}`, this.addPost);
       this.router.delete(`${this.path}/:id`, this.deletePost);
       this.router.post(`${this.path}/:num`, this.getNPosts);
       this.router.get(`${this.path}s`, this.getAllPosts);
       this.router.delete(`${this.path}s`, this.deleteAllPosts);
   }

   private getLatestData = async (request: Request, response: Response) => {
       const latestData = testArr[testArr.length - 1];
       response.status(200).json({ latestData });
   }

   private getPostById = async (request: Request, response: Response) => {
       const id = parseInt(request.params.id);
       const post = testArr[id];
       response.status(200).json({ post });
   }

   private addPost = async (request: Request, response: Response) => {
       const { elem } = request.body;
       testArr.push(elem);
       response.status(201).json({ message: 'Post added successfully' });
   }

   private deletePost = async (request: Request, response: Response) => {
       const id = parseInt(request.params.id);
       testArr.splice(id, 1);
       response.status(200).json({ message: 'Post deleted successfully' });
   }

   private getNPosts = async (request: Request, response: Response) => {
       const num = parseInt(request.params.num);
       const nPosts = testArr.slice(0, num);
       response.status(200).json({ nPosts });
   }

   private getAllPosts = async (request: Request, response: Response) => {
       response.status(200).json({ testArr });
   }

   private deleteAllPosts = async (request: Request, response: Response) => {
       testArr = [];
       response.status(200).json({ message: 'All posts deleted successfully' });
   }
}

export default DataController;
