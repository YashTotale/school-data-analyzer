// External Imports
import { DataTypes } from "sequelize";

// Internal Imports
import sequelize from "../../config/sequelize";

const District = sequelize.define(
  "District",
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

export default District;
