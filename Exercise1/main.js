let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function parseObject(obj){
    for (i in Object.keys(obj)){
        if (Array.isArray(obj[Object.keys(obj)[i]])){
            console.log(Object.keys(obj)[i] + ":")
            for (t in obj[Object.keys(obj)[i]]){
                if (obj[Object.keys(obj)[i]][t] == '[object Object]'){
                    parseObject(obj[Object.keys(obj)[i]][t])
                }else {
                    console.log(obj[Object.keys(obj)[i]][t])
                }  
            }
            console.log(" ")
        } else { 
            console.log(Object.keys(obj)[i] + ": " + obj[Object.keys(obj)[i]])
            console.log(" ")
        }
    } 
}  

parseObject(person3)
