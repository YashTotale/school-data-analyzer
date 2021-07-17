// External Imports
import { DataTypes } from "sequelize";

// Internal Imports
import sequelize from "../../config/sequelize";

const School = sequelize.define(
  "School",
  {
    index: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);

export default School;
