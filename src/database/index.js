import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Category from "../app/models/Category";
import Post from "../app/models/Post";
import User from "../app/models/User";

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);

    // Start dos modelos
    User.init(this.connection);
    Post.init(this.connection);
    Category.init(this.connection);

    // Associações dos modelos
    User.associate(this.connection.models);
    Post.associate(this.connection.models);
  }
}

export default new Database();
