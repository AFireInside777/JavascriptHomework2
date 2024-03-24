let moreThanTen = (word) =>{
    return new Promise ((resolve, reject) => {
        if(word.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

moreThanTen('Asynchronous')
.then((result) => {
    console.log("Big Word.")
})
.catch((error) => {
    console.log("Small Number.")
})