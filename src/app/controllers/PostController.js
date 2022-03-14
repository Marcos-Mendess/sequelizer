import Post from "../models/Post";
const { validateErrors } = require("../../utils/functions");

class PostController {
  async index(req, res) {
    try {
      const { id } = req.params;
      const posts = await Post.findAll({
        where: {
          user_id: id,
          status: true,
          is_fake_new: false,
        },
      });
      return res.json(posts);
    } catch (error) {
      const message = validateErrors(error);
      return res.status(400).send(message);
    }
  }
  async store(req, res) {
    const { title, content, url_cover, category_id, user_id } = req.body;
    try {
      const data = await Post.create({
        title,
        content,
        url_cover,
        category_id,
        user_id,
      });
      return res.json(data);
    } catch (error) {
      const message = validateErrors(error);
      return res.status(400).send(message);
    }
  }
}

export default new PostController();
