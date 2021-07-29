const express = require("express");
const session = require("express-session");
const path = require("path");
const routes = "./controller";
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const exphbs = require("express-handlebars");
const hbs = exphbs.create({}); //No helpers used

const app = express();
const PORT = process.env.PORT || 3000;

const sess = {
  secret: "Spooky Secrets",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//app.use(routes);

//Listen to Port
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
});
