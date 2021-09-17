export const functionGenerateRandom=()=>{
    function generateRandom(){
        var randomNumbers = [];
        for (let i = 0; i<10; i++){
            let newNumber = Math.random()*700;
            randomNumbers.push(newNumber);
        }
        console.log(randomNumbers)
        return randomNumbers;
}
    generateRandom();
}