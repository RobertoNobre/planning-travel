const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    }
}