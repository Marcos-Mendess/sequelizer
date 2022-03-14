/*
index,store,show,destroy
*/
import { Op } from "sequelize";
import User from "../models/User";
const { validateErrors } = require("../../utils/functions");
class UserController {
  async index(req, res) {
    const word = req.query.word ? req.query.word : "";
    try {
      const users = await User.findAll({
        include: [
          {
            association: "posts",
            where: {
              title: {
                [Op.iLike]: `%${word}%`,
              },
              status: true,
            },
          },
        ],
      });
      return res.json(users);
    } catch (error) {
      const message = validateErrors(error);
      return res.status(400).send(message);
    }
  }
  async store(req, res) {
    const { name, nickname, email, password_hash } = req.body;

    try {
      const user = await User.create({
        name,
        nickname,
        email,
        password_hash,
      });
      return res.json(user);
    } catch (error) {
      const message = validateErrors(error);
      return res.status(400).send(message);
    }
  }

  async show(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    return res.json(user);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, nickname, email } = req.body;

    const user = await User.findByPk(id);
    if (user) {
      user.name = name;
      user.nickname = nickname;
      user.email = email;
    }
    const userUpdated = await user.save();

    return res.json(userUpdated);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);
    await user.destroy();
    return res.json({});
  }
}

export default new UserController();
