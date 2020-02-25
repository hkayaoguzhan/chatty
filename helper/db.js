const mongoose = require("mongoose");
module.exports = () => {
  mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.on("open", () => {
    //console.log("MongoDb is Connected");
  });
  mongoose.connection.on("error", err => {
    console.log("MongoDb Err", err);
  });
  mongoose.Promise = global.Promise;
};


//"mongodb+srv://root:123@movie-api-vi9wz.mongodb.net/test?retryWrites=true&w=majority"