const express = require('express');
const router = express.Router();
const mysql2 = require("./db")
const exampleMiddleware = (req, res, next) => {
    // console.log("req---->",req)
    next()
}

// const userController = require('../contoller/userTable');

// router.post('/api/signup', exampleMiddleware, userController.signup);
router.get('/api/userTable/:id', exampleMiddleware, (req,res)=>{
    
    console.log(req);
    res.json({"hello":req.params.id})
});

router.get("/api/getEmployees",exampleMiddleware,(req,res)=> {
    console.log(req);

    mysql2.query("Select * from employees",(err,result)=>{
        if(err) console.log(err)
        //  console.log(res)
         console.log(typeof(result))

        //  res.json(res)
        res.json({"result":result})
     })
    
})
// router.patch('/api/userTable/:id', exampleMiddleware, userController.patchUser)
// router.put('/api/userTable/:id', exampleMiddleware, userController.updateUser);
// router.delete('/api/userTable/delete', exampleMiddleware, userController.deleteUser);

module.exports = router;