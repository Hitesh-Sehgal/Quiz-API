const mcqs = require('../models/mcqs');

module.exports = (req, res) => {
    if(!req.params.id){
        res.json({
            success: false,
            msg: "Please enter id"
        })
    } else{
        mcqs.findOne({_id: req.params.id}, (err, data)=>{
            if(err){
                res.json({
                    success: false,
                    msg: "Error"
                })
            } else{
                var score = 0;
                if(req.body.answer === data.answer){
                    score += 1;
                } else{
                    score = 0;
                }
                res.json({
                    success: true,
                    score
                })
            }
        })
    }
}