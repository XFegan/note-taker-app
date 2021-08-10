const express = require("express");

//setting up server
const app = express();
const PORT = process.env.PORT || 3001;

//express to handle the data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

//app to start to listen
// app.listen(PORT, () => {
//     console.log("App listening on PORT" + PORT)
// });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });