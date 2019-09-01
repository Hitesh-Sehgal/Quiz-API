const mcq = require('../models/mcqs');

module.exports = (req, res) => {
    if(req.body.question && req.body.answer && req.body.option1 && req.body.option2 && req.body.option3){
        let newQues = new mcq({
            question: req.body.question,
            answer: req.body.answer,
            option1: req.body.option1,
            option2: req.body.option2,
            option3: req.body.option3,
        })

        newQues.save( (err, data) => {
            if(err){
                console.log(err)
                res.json({
                    success: false
                })
            } else{
                res.json({
                    success: true
                })
            }
        })
    }
    else{
        res.json({
            success: false,
            msg: "Please fill all the details."
        })
    }
}
