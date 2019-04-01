const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

module.exports = {
    async signup(req, res, next){
        User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if(user.length >= 1){
                return res.status(409).json({
                    message: "Mail exists"
                })
            }else{
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if(err){
                        return res.status(500).json({
                            error: err
                        })
                    }else{
                        const user = new User({
                            name: req.body.name,
                            email: req.body.email,
                            password: hash
                        });
                        user.save()
                        .then(result => {
                            res.status(201).json({
                                message: "User Created"
                            })
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(500).json({
                                error: err
                            })
                        })
                    }
                });
            }
        })
    },

    async signin(req, res, next){
        User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if(user.length < 1){
                return res.status(401).json({
                    status: 401,
                    error: "Error",
                    message: "Auth failed"
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if(err){
                    return res.status(401).json({
                        message: "Auth failed"
                    });
                }
                if(result){
                    const token = jwt.sign({
                        name: user[0].name,
                        email: user[0].email,
                        userId: user[0]._id
                    },
                    "key-roberto", 
                    { expiresIn: "1h" });

                    return res.status(200).json({
                        message: "Auth successful",
                        token: token
                    });
                }
                res.status(401).json({
                    message: "Auth failed"
                });
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
    }
}