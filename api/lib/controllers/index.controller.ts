// lib/controllers/index.controller.ts

import Controller from '../interface/controller.interface';
import { Request, Response, Router } from 'express';
import path from 'path';

class IndexController implements Controller {
    public path = '/';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.serveIndex);
    }

    private serveIndex = async (request: Request, response: Response) => {
        const filePath = path.join(__dirname, '..', 'public', 'index.html');
        console.log('Path to index.html:', filePath); // Wyświetlenie ścieżki
        response.sendFile(filePath);
    }
}

export default IndexController;
