import Router from 'express';
import PostController from './controllers/Post.js';

const router = new Router();

router.post('/posts', PostController.create);
router.get('/posts', PostController.getAllPosts);
router.get('/posts/:id', PostController.getPost);
router.put('/posts/:id', PostController.updatePost);
router.delete('/posts/:id', PostController.deletePost);

export default router;