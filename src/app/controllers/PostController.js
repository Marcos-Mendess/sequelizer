import createPostValidation from "../../validations/Category/post/CreatePostSchema";
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
    try {
      const data = req.body;
      if (!(await createPostValidation.isValid(data))) {
        throw new Error("Campos inválidos");
      }
      const post = await Post.create(data);
      return res.json(post);
    } catch (error) {
      const message = validateErrors(error);
      return res.status(400).send(message);
    }
  }
}

export default new PostController();
