import Category from "../models/Category";

class CategoryController {
  async index(req, res) {
    const categories = await Category.findAll();
    return res.json(categories);
  }

  async store(req, res) {
    const data = req.body;
    const category = await Category.create(data);
    return res.json(category);
  }
}

export default new CategoryController();
