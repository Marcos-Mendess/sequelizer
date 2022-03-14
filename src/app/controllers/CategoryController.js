import { validateErrors } from "../../utils/functions";
import Category from "../models/Category";

class CategoryController {
  async index(req, res) {
    try {
      const categories = await Category.findAll();
      return res.json(categories);
    } catch (error) {
      const message = validateErrors(error);
      throw new Error(message.message);
    }
  }

  async store(req, res) {
    const data = req.body;
    try {
      const category = await Category.create(data);
      return res.json(category);
    } catch (error) {
      const message = validateErrors(error);
      throw new Error(message.message);
    }
  }
}

export default new CategoryController();
