const router = require('./routerFile');
const express = require('express');
// setupDb();

const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors())
app.use(router);

app.listen(8080, () => console.log('server is running on port 8080'));
