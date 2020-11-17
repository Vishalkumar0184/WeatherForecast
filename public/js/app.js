const weatherForm= document.querySelector("form");
const search= document.querySelector("input");
const messageOne=document.querySelector("#message-1")
const messageTwo=document.querySelector("#message-2")



weatherForm.addEventListener("submit",(e)=>{
                        
    e.preventDefault();

    const location=search.value
    messageOne.textContent="Loading..."
    messageTwo.textContent=""
    
    
fetch("http://localhost:3000/v1/user/getWeather?q="+location).then((response)=>{
                    
    response.json().then((data)=>{

    if(data.error){
            messageOne.textContent=(data.error)
    }
    else{
    console.log("Data sent Sucessfully")
    
    messageOne.textContent=data.responseMessage;
    messageTwo.textContent= "";
    console.log(data.result)

    }
    })
            
})

})

