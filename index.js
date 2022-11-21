// Code your solutions in this fil



function writeCards(array, event) { 
    const newarray = []; 

    for (let i = 0; i < array.length; i++){
        newarray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);     
        
    }
    return newarray;

}

function countDown () {
    let i = 10;
    while (i >= 0){
        console.log (i--);


    }
}