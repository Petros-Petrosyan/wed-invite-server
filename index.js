const express = require("express");
const cors = require("cors");

const authenticationRoutes = require("./routes/authentication");
const templatesRoutes = require("./routes/templates");
const errorHandler = require("./utils/errorHandler");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authenticationRoutes);
app.use(templatesRoutes);
app.use(errorHandler);

app.listen(process.env.PORT || 3001);
