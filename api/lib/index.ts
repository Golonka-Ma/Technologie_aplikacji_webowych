// index.ts

import App from './app';
import IndexController from './controllers/index.controller';
import PostController from './controllers/data.controller';

const app = new App([
    new IndexController(),
    new PostController()
]);

app.listen();
