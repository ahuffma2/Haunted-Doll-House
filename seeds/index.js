const sequelize = require("../config/connection");
const Artifact = require("../models");

const seedArtifacts = require("./Artifact-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await Artifact.bulkCreate(seedArtifacts);
  console.log("\n----- ARTIFACTS SEEDED -----\n");

  process.exit(0);
};

seedAll();
