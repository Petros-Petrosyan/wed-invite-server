const express = require("express");
const cors = require("cors");

const authenticationRoutes = require("./routes/authentication");
const userRoutes = require("./routes/user");
const templatesRoutes = require("./routes/templates");
const messagesRoutes = require("./routes/messages");
const errorHandler = require("./utils/errorHandler");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authenticationRoutes);
app.use(userRoutes);
app.use(templatesRoutes);
app.use(messagesRoutes);
app.use(errorHandler);

app.listen(process.env.PORT || 3001);
