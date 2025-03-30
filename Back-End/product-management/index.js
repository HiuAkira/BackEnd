const express = require('express');
const app = express();
const port = 3000;

const route = require("./routers/client/index.routes");

app.set('views','./views');
app.set('view engine', 'pug');

// Routers
route(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});