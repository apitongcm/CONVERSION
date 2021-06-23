console.log("Hello World!"); // appear message in the console of the browser. 

//STRINGS CAN BE OBJECTS 
let firstName = "John";  //Primitive data 
let firstName1 = new String("John"); // is an Object
// (x == y) : true since both of them have equal values. 
// (x === y): false since the other one is a string and the other one is an object. 
// you can determine it using "typeof"
// OBJECTS CANNOT BE COMPARED!! 

//QUERY or FINDING STRING IN A STRING 
let phrase = " Roses are red, Violets are blue, I keep on Loving you!"; 
console.log(phrase.indexOf("blue"));
console.log(phrase.length); //the total number of char found in the phrase.
// search() cannot take second start position argument.
//indexOf() cannot take powerful search values. 

//CONVERTING A STRING TO AN ARRAY 
let phraseSplit = "Hi girl, you just caught my eyes, thought I should give it a try, to get your name, and your number, go grab some lunch, and eat some cucumber";
const youAndMe = phraseSplit.split(",");
//document.getElementById("justChance").innerHTML = youAndMe[3];

//PRECISION : WHOLE NUMBER w/ period accurate up to 15 DIGITS.
//subtracting the damage taken from the enemy to your life points
// ADDITION for the regeneration 
let life ="100"; 
let enemyDmg = "5"; 
let lifeLeft = life - enemyDmg;
console.log("you only have " + lifeLeft + " life percentage left!");

//when the player uses Elixer it will multiply its attack power by 5.
// DIVIDE for adding debuff to the player. 
let playerDmg = "20";
let useElixer = "5"; 
let StrongDmg = playerDmg * useElixer; 
console.log("your basic attack greatly increased. your total atk points is: " + StrongDmg);

//Nan - NOT A NUMBER reserved word for not a legal number like 
// let x = 100/ "Apple";

//NUMBER CONVERSION 






//FOR VALUE DECIMAL 
document.getElementById("submit1").addEventListener("click", function(){
    let myNumber = parseInt(document.getElementById("valde").value);

    if (myNumber < 999999999){
        if (document.getElementById("base16").checked) {
            document.getElementById("result").innerHTML = myNumber.toString(16);
         }
         else if (document.getElementById("base2").checked) {
            document.getElementById("result").innerHTML = myNumber.toString(2);
         }else if (document.getElementById("base8").checked) {
             document.getElementById("result").innerHTML = myNumber.toString(8);
        }else{
            document.getElementById("result").innerHTML = "Error!!! ";
        }

    } else {
        document.getElementById("result").innerHTML = "Math Error!!!";
    }
});

//FOR VALUE BINARY
document.getElementById("submit2").addEventListener("click", function(){
    let myNumberone =  document.getElementById("valbi").value;
    let convInput = parseInt(myNumberone,2);
     if (document.getElementById("base10_a").checked){
        return document.getElementById("result1").innerHTML = convInput.toString(10);
     } else if (document.getElementById("base16_a").checked){
         return document.getElementById("result1").innerHTML = convInput.toString(16);
     } else {
         return document.getElementById("result1").innerHTML = convInput.toString(8);
     }        
});

//FOR VALUE OCTAL 
document.getElementById("submit3").addEventListener("click", function(){
    let myNumberone =  document.getElementById("valoct").value;
    let convInput = parseInt(myNumberone,8);
     if (document.getElementById("base10_b").checked){
        return document.getElementById("result2").innerHTML = convInput.toString(10);
     } else if (document.getElementById("base16_b").checked){
         return document.getElementById("result2").innerHTML = convInput.toString(16);
     } else {
         return document.getElementById("result2").innerHTML = convInput.toString(2);
     }        
});

//FOR VALUE HEXADECIMAL 
document.getElementById("submit4").addEventListener("click", function(){
    let myNumberone =  document.getElementById("valHex").value;
    let convInput = parseInt(myNumberone,16);
     if (document.getElementById("base10_c").checked){
        return document.getElementById("result3").innerHTML = convInput.toString(10);
     } else if (document.getElementById("base8_c").checked){
         return document.getElementById("result3").innerHTML = convInput.toString(8);
     } else {
         return document.getElementById("result3").innerHTML = convInput.toString(2);
     }        
});

function validateDec(){
    var msgErr, dec, result;
    msgErr= document.getElementById("pErr");
    msgErr.innerHTML = "";
    dec = document.getElementById("valde").value;
    result = document.getElementById("result").value;
    try {
        if (dec == "") throw " is required";
        if (dec < 0 ) throw " is Negative!";
        if (dec > 99999999) throw " is too Big!, Can't solve";    
    }
    catch(err) {
        msgErr.innerHTML = "Input" + err;
        alert("There is an Error Encountered!");
    }
}








