import { Model, DataTypes } from "sequelize";

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        cover_url: DataTypes.STRING,
        is_fake_new: DataTypes.BOOLEAN,
        status: DataTypes.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  }
}

export default Post;
