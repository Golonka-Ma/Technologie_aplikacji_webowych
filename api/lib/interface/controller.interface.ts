// lib/interfaces/controller.interface.ts

import { Router } from 'express';

export default interface Controller {
    path: string;
    router: Router;
}
