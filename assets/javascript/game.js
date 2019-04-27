//words_list lenght: 14 
var words_list = [
    "Oregon",
    "Weed",
    "Bong",
    "Marijuana",
    "Hippie",
    "Progress",
    "Liberal",
    "Left",
    "Green",
    "Trees",
    "Homeless",
    "Papa Dan",
    "Natural",
    "Hiking",
    "Craft",
]
var wins = 0, losses = 0;
var startvalue = 0;

function game_play(){
    document.getElementById("start").innerHTML= ""
    
    if(startvalue === 0){
        randomize();
    };
    
    guess();


    startvalue += 1;
}


function guess(){
    if(event.keyCode >= 65 && event.keyCode <= 90){
        var letter = event.key.toLowerCase();
        var guessed_let = document.createTextNode(letter.toUpperCase());
        var guessed_list = document.getElementById("guessed-letters").innerHTML;

        /*For loop to cycle through the Guessed Letters List to prevent replications
        / and thus preventing wasted guesses. */
       // console.log("guessed_list length: " + guessed_list.length);
        for(i=-1 ; i < (guessed_list.length) ; i++){
           // console.log("For Loop: ", "guess is: " + letter.toUpperCase(), "letter in index: " + guessed_list[i], "i = " + i);
            if(guessed_list.length == 0){
               // console.log("if statement");
                document.getElementById("guessed-letters").appendChild(guessed_let);
                break;
            }
            else if(guessed_list[i] == letter.toUpperCase()){
             //   console.log("cont, index: " + i);
                break;
            }
            else if(guessed_list[i] != letter.toUpperCase() && i == (guessed_list.length-1)){
                //console.log("else-if #2");
                document.getElementById("guessed-letters").appendChild(guessed_let);
                break;
            }
        }
    }   
    //console.log("___________________________________")
}

function randomize(){
    var randomindex = Math.trunc((Math.random() * 100)%(words_list.length));
    var word_chosen = words_list[randomindex];
    console.log(word_chosen);
    document.getElementById("guess-word").innerHTML= words_list[randomindex];
};