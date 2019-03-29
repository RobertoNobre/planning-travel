const mongoose = require('mongoose');

const Travel = mongoose.model('Travel');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const travels = await Travel.paginate({}, { page, limit: 10 });
        return res.json(travels);  
    },
    async show(req, res){
        const travel = await Travel.findById(req.params.id);
        return res.json(travel); 
    },
    async store(req, res){
        const travel = await Travel.create(req.body);
        return res.json(travel); 
    },
    async update(req, res){
        const travel = await Travel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(travel); 
    },
    async destroy(req, res){
        await Travel.findByIdAndDelete(req.params.id);
        return res.send(); 
    },
}