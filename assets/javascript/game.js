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
    

    var randomindex = Math.trunc((Math.random() * 100)%(words_list.length));


    var word_chosen = words_list[randomindex];

    if(startvalue === 0){
    document.getElementById("guess-word").innerHTML= words_list[randomindex];
    };
    var guesses = 
    
    guess();


    startvalue += 1;
}


function guess(){
        var letter = event.key.toLowerCase();
        var guessed_let = document.createTextNode(letter.toUpperCase());
        var guessed_list = document.getElementById("guessed-letters").innerHTML;

        for(i=0 ; i <= guessed_list.length ; i++){
           
            if(guessed_list.length == 0){
                console.log( "guessed: " + letter, "length: " + guessed_list.length);
                document.getElementById("guessed-letters").appendChild(guessed_let);
                break;
            }
            else if(guessed_list[i] == letter.toUpperCase()){
                console.log(i);
                if(guessed_list[i] != letter.toUpperCase()){
                    console.log( "guessed: " + letter, "length: " + guessed_list.length);
                    document.getElementById("guessed-letters").appendChild(guessed_let);
                    break;
                }
                continue;
            }
        }
            
        


}