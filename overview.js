var express = require("express");
var router = express.Router();

router.get('/overview', function(req, res){
    res.render('overview', {
        title: 'Hi',
    })
})

module.exports = router;