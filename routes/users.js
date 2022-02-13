const express = require("express")
const router = express.Router()
const userController = require('../controllers/users');

router.get('/',(req, res, next) => {
    const bdy = req.body;
    userController.addUser(bdy)
    .then((user) => {
        res.json(user);
    })
    .catch((e) => {
        res.status(404).json(e);
    });
    
    //res.json([1,2,3])
});

router.get('/login',(req, res, next) => {
    const bdy = req.body;
    userController.userlogin(bdy)
    res.send("login done ....")

})

router.get('/:id', (req, res, next)=> {
    res.json({user: req.params.id})
})

module.exports = router;