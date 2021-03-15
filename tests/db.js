const { MongoMemoryServer } = require('mongodb-memory-server');

// uses an in-memory test db
const mongo = new MongoMemoryServer({
  instance: {
    port: 5050
  }
})

module.exports = () => {
  return mongo.getPort()
  .then(port => ({ port }));
};