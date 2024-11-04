const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/dprtmntDB')
  .then(() => {
    console.log('DB is connected');
  })
  .catch(e => {
    console.log(e);
  });
module.exports = mongoose;
