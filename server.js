///////************SERVER ENTRY POINT*********////////// */

//import app.js
const app = require('./app');

//listen port
const port = 80;

//server start
app.listen(port, (err) => {
  if (err) {
    console.log(`App is not running ${err}`);
  }
  console.log(`App is running on port ${port}`);
});
