const mongoose = require('mongoose');

mongoose.connect('mongodb://rahulbali:in2themood@ds036178.mlab.com:36178/karm-db', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
  .then(() => console.log('Database is Connected'))
  .catch(err => console.log(err));

