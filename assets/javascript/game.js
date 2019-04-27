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
function game_start(){
    document.getElementById("start").innerHTML= " "
    

    var randomindex = Math.trunc((Math.random() * 100)%(words_list.length));
    //checking which index is chosen
    //console.log(randomindex);

    var word_chosen = words_list[randomindex];
    //checking word is properly stored in word_chosen
    //console.log(word_chosen);

    //ensuring word doesn't cycle every keystroke
    if( startvalue === 0){
    document.getElementById("guess-word").innerHTML= words_list[randomindex];
    };
    document.onkeyup = function guess(){
        var letter = event.key.toLowerCase();
        //checking that key presses are being logged properly
        //console.log(letter);
    startvalue += 1;
    }
}


