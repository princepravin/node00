const router = require('./routerFile');
const express = require('express');
// setupDb();

const sql = require('mysql2');
const mysql2 = sql.createPool({
    host:"localhost",
    user:"",
    password:"",
    database:"Address"
})


mysql2.query("Select * from Address",(err,res)=>{
    console.log(err)
    console.log(res)
})
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors())
app.use(router);

app.listen(8080, () => console.log('server is running on port 8080'));
