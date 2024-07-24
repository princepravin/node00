const express = require('express');
const router = express.Router();

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
// router.patch('/api/userTable/:id', exampleMiddleware, userController.patchUser)
// router.put('/api/userTable/:id', exampleMiddleware, userController.updateUser);
// router.delete('/api/userTable/delete', exampleMiddleware, userController.deleteUser);

module.exports = router;