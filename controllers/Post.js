import Post from "../models/Post.js";

class PostController {
    async create(req, res) {
        try {
            const { author, title, content, picture } = req.body;
            const post = await Post.create({author, title, content, picture});
            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllPosts(req, res) {
        try {
            const posts = await Post.find();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getPost(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ message: "Id doesn't set" })
            }
            const posts = await Post.findById(id);
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async updatePost(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ message: "Id doesn't set" })
            }
            const post = await Post.findById(id);
            const updatedPost = await Post.findByIdAndUpdate(id, post,  { new: true });
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async deletePost(req, res) {
        try {

        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new PostController();