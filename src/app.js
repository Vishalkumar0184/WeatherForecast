const path= require("path")
const hbs= require("hbs")
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT

app.use(bodyParser.json({extended : true, limit : '50mb'}))

app.use('/v1/user', require('../router/router'));

const publicDirectoryPath=path.join(__dirname,"../public");
const viewsPath=path.join(__dirname,"../templates/views");

app.use(express.static(publicDirectoryPath));
app.set("view engine","hbs");
app.set("views",viewsPath);



app.get("",(req,res)=>{                                         

    res.render("index",{

        
    });
})

app.listen(port,(error, result)=>{
    if(error){
        console.log('Error : ',error);
    } else {
        console.log('serverUp and running on port ' +port);
    }
})