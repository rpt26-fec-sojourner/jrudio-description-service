const { MongoMemoryServer } = require('mongodb-memory-server');

// uses an in-memory test db
const mongo = new MongoMemoryServer({
  instance: {
    port: process.env.MONGO_PORT || 27017
  }
});

module.exports = () => {
  return mongo.getPort()
    .then(port => ({ port }));
};