import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/graphqlnotes', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(db => console.log('database is connected'))
.catch(error => console.log(`error ${error}`))