const sql = require('mysql2');
const dot = require('dotenv')

dot.config()

const mysql2 = sql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
})


// mysql2.query("Select * from employees",(err,res)=>{
//    if(err) console.log(err)
//     console.log(res)
// })

module.exports = mysql2