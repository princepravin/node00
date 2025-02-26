const express = require('express');
const router = express.Router();
const mysql2 = require("./db")
const exampleMiddleware = (req, res, next) => {
    next()
}
router.get('/api/userTable/:id', exampleMiddleware, (req,res)=>{
    
    console.log(req);
    res.json({"hello":req.params.id, "array":[1,2,3,4,5]})
});

router.get("/api/getEmployees",exampleMiddleware,(req,res)=> {
    // console.log(req);

    mysql2.query("Select * from employees",(err,result)=>{
        if(err) console.log(err)
        // result.values
        console.log(result)
        console.log(result.affectedRows);
        console.log(result.entries)
        console.log(result.values)
        // if (result.values.length === 0) {
        //     console.log("No data found in employees table.");
        //     return res.json({ employees: [] });
        // }

        res.json({ employees: result });
     })
    
})
// router.patch('/api/userTable/:id', exampleMiddleware, userController.patchUser)
// router.put('/api/userTable/:id', exampleMiddleware, userController.updateUser);
// router.delete('/api/userTable/delete', exampleMiddleware, userController.deleteUser);

module.exports = router;