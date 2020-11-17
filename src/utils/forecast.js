const request = require('request')



const forecast= (location,callback)=>{
        const url="http://api.openweathermap.org/data/2.5/weather?appid="+process.env.accessKey+"&q="+encodeURIComponent(location)

        request({url,json:true},(error,response)=>{
        
            if(error){
              return  console.log("Unable to connect to weather services..!",undefined)
            }else if(response.body.cod==400){ 
              return console.log(undefined,"Unable to find Location")
            }else if(response.body.cod==404){ 
              return   console.log(undefined,response.body.message)
            }
            else{
                const data=response.body
                callback(undefined,data)
            }
    
    })

}


// forecast('delhi',(error,data)=>{
//      // console.log('Error ',error)
//      console.log('Data ',data)
//  })


module.exports = forecast