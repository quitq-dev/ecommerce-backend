const mongoose = require("mongoose");
const mongoConfig = require("../configs/mongo.config");
const { host, port, name } = mongoConfig.db;
const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString)
      .then((_) => console.log("Connected MongoBD success"))
      .catch((err) => console.log("Connected Error"));
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
