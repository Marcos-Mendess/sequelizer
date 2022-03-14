const { validateErrors } = require("../../utils/functions");

import Category from "../models/Category";
import createCategoryValidation from "../../validations/Category/CreateCategorySchema";
class CategoryController {
  async index(req, res) {
    try {
      const categories = await Category.findAll({
        attributes: ["id", "name"],
      });
      return res.json(categories);
    } catch (error) {
      const message = validateErrors(error);
      throw new Error(message.message);
    }
  }

  async store(req, res) {
    console.log(req.body);
    try {
      const name = req.body;
      if (!(await createCategoryValidation.isValid(name))) {
        return res.json({ message: "Tipo de dado inválido" });
      }

      const category = await Category.create(name);
      return res.json(category);
    } catch (error) {
      const message = validateErrors(error);
      throw new Error(message.message);
    }
  }
}

export default new CategoryController();
