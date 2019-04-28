//words_list lenght: 14 
var words_list = [
    "Bucket",
    "Weed",
    "Bong",
    "Marijuana",
    "Art",
    "Draw",
    "Color",
    "Paint",
    "Green",
    "Happy",
    "PapaDan", //index: 10
    "Natural",
    "Brush",
    "Craft",
    "imagination",
    "tuberculosis",

]

//preconditions
var wins = 0, losses = 0;
var startvalue = 0;
var word;
var hidden_word = [];
var guesses_left = 12;


print("guesses-left", guesses_left);
print("wins", wins);
print("losses", losses);

function game_play(){
    document.getElementById("start").innerHTML= ""

    if(startvalue === 0){
        word = randomize();
        hide(word, hidden_word);
        print("guess-word", hidden_word);
    };
    
    guesses_left -= guess(word, hidden_word);
    print("guesses-left", guesses_left);
    print("guess-word", hidden_word);

    print("wins", wins);
    print("losses", losses);

    startvalue += 1;
    end_reset(end_condition(word, hidden_word, guesses_left));
}


function guess(word, hidden_word){
    if(event.keyCode >= 65 && event.keyCode <= 90){
        document.body.style.backgroundImage = "url('assets/images/body.jpg')";
        var letter = event.key.toLowerCase();
        var guessed_let = document.createTextNode(letter.toUpperCase() + " ");
        var guessed_list = document.getElementById("guessed-letters").innerHTML;
        
        //Checks for positive matches between keystroke and the word
        for(i=0 ; i < word.length ; i++){
            if(letter == word[i].toLowerCase()){
                hidden_word[i] = letter.toUpperCase();
                console.log("word: " + word , "| hidden word: " + hidden_word, "| letter: " + letter, "| letter in word: " + word[i], "| Index: " + i);
                console.log("_________________________________________________________")
                if(i == word.length){return 0;}
            }
        }
        /*For loop to cycle through the Guessed Letters List to prevent replications
        / and thus preventing wasted guesses. */
        //console.log("__________________________________________");
        //console.log("guessed_list length: " + guessed_list.length);
        for(i=0 ; i < (guessed_list.length+1) ; i++){
           //console.log("For Loop: ", "guess is: " + letter.toUpperCase(), "letter in index: " + guessed_list[i], "i = " + i);
            if(guessed_list.length == 0){
                //console.log("Zero", "index: " + i);
                document.getElementById("guessed-letters").appendChild(guessed_let);
                return 1;
            }
            else if(guessed_list[i] == letter.toUpperCase()){
                //console.log("Same Letter, index: " + i);
                return 0;
            }
            else if(guessed_list[i] != letter.toUpperCase() && i == (guessed_list.length-1)){
                //console.log("New Letter, index: " + i);
                document.getElementById("guessed-letters").appendChild(guessed_let);
                return 1;
            }
        }
    }
    else{return 0;}   
}

function randomize(){
    var randomindex = Math.trunc((Math.random() * 100)%(words_list.length));
    var word_chosen = words_list[randomindex];
    console.log(word_chosen);
    return word_chosen;
};

function print(id, content){
    document.getElementById(id).innerHTML= content;
}

function hide(word, hidden_word){
    for (i = 0; i<word.length ; i++){
        hidden_word.push("_");
    }
}

function end_condition(word , hidden_word, guesses_left){
    var win_counter = 0;
    for(i = 0 ; i < word.length ; i++){
        if(hidden_word[i].toLowerCase() != "_"){
            win_counter += 1;
            if(win_counter == word.length){return 1};
        }
    }
    if (guesses_left == 0){
        return 0;
    }
    
}

function end_reset(num){
    if(num == 1 && word == words_list[10]){
        document.body.style.backgroundImage = "url('assets/images/Win10.jpg')";
        startvalue = 0;
        wins += 1;
        hidden_word = [];
        guesses_left = 12;
        document.getElementById("guessed-letters").innerHTML = "";
    }
    else if(num == 1){
        document.body.style.backgroundImage = "url('assets/images/Win.jpg')";
        startvalue = 0;
        wins += 1;
        hidden_word = [];
        guesses_left = 12;
        document.getElementById("guessed-letters").innerHTML = "";
    }

    if(num == 0){
        document.body.style.backgroundImage = "url('assets/images/Lose.jpg')";
        startvalue = 0;
        losses += 1;
        hidden_word = [];
        guesses_left = 12;
        document.getElementById("guessed-letters").innerHTML = "";
    }
}