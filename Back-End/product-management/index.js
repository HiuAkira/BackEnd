const express = require('express');

const methodOverride = require("method-override");

const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(methodOverride("_method"));

// parse application
app.use(bodyParser.urlencoded({extended: false}));

const systemConfig = require("./configs/system")
const route = require("./routers/client/index.routes");
const routeAdmin = require("./routers/admin/index.routes");

const database = require("./configs/database");

database.connect();

app.set('views','./views');
app.set('view engine', 'pug');

app.use(express.static("public")); 

// Routers
routeAdmin(app);
route(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

// App locals Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

