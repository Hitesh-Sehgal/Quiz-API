const mcqs = require('../models/mcqs');

module.exports = (req, res) =>{
    mcqs.find({}, (err, data)=>{
        if(err){
            res.json({
                error: err,
            })
        } else if(data.length == 0){
            res.json({
                success: false,
                msg: "Please enter data first",
            })
        } else{
            res.send(data);
        //     for(var i=2; i<data.length; i++){   
        //     var html ="";
        //     html +="<body>";
        // html += data[2].question+"<br>";
        // html += "<script>";
        // html += "function Bclick() {document.getElementById('demo').innerHTML = 'Paragraph changed!')}";
        // html += "</script>";
        // html += "<form method='post' name='form1' action='/myaction'>";
        // html += "<input type='radio' name='options' value='"+data[2].answer+"'/>"+data[2].answer;
        // html += "<input type='radio' name='options' value='"+data[2].option1+"'/>"+data[2].option1;
        // html += "<input type='radio' name='options' value='"+data[2].option2+"'/>"+data[2].option2;
        // html += "<input type='radio' name='options' value='"+data[2].option3+"'/>"+data[2].option3+"<br>";
        // html += "<input type='submit' value='Done' onclick = 'Bclick()'/>";
        // html += "</form>";
        // html += "<p id='demo'>Hello</p>"
        // html +="</body>";
        // res.send(html);
        // }
        }
    })
}
