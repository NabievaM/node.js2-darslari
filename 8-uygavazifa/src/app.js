const express = require("express");
const compression = require("compression");

const routes = require("./routes");
const config = require("../config");
const app = express();
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen(config.PORT, () => {
  console.log(config.PORT);
});
