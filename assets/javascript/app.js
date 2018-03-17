//---------Variables---------------


//Define varible where the quiz will be placed
var quizBox = $('#quiz');

//Array holding the questions and answers
var quiz = [{
    question: "1 . With over 35 million residents, what is the most populous city in the world?",
    answers: ["New York City", "Tokyo", "Beijing", "Delhi"],
    rightAnswer: "Tokyo"
}, {
    question: "2 . Which country is home to the World Heritage Site Machu Picchu?",
    answers: ["Peru", "Chile", "Mexico", "Panama"],
    rightAnswer: "Peru"
}, {
    question: "3 . Catalonia is a region of what country?",
    answers: ["Portugal", "Brazil", "Indonesia", "Spain"],
    rightAnswer: "Spain"
}, {
    question: "4 . What is the longest river in the world?",
    answers: ["Nile", "Amazon", "Yangtze", "Congo"],
    rightAnswer: "Amazon"
}, {
    question: "5 . Which country has the largest land mass?",
    answers: ["Canada", "United States", "Russia", "China"],
    rightAnswer: "Russia"
}, {
    question:  "6 . Which country has the most volcanoes?",
    answers: ["Indonesia", "Chile", "Japan", "United States"],
    rightAnswer: "United States"
}, {
    question: "7 . What is earth's largest ocean by surface size?",
    answers: ["Atlantic", "Pacific", "Indian", "Arctic"],
    rightAnswer: "Pacific"
}, {
    question: "8 . What is Earth's largest continent?",
    answers: ["Asia", "Africa", "Antarctica", "North America"],
    rightAnswer: "Asia"
}, {
    question: "9. How many countries are there in Africa?",
    answers: ["67", "49", "54", "38"],
    rightAnswer: "54"
}, {
    question: "10. Which is the northernmost capital city in the world?",
    answers: ["Oslo, Norway", "Nuuk, Greenland", "Helsinki, Finland", "Reykjavik, Iceland"],
    rightAnswer: "Reykjavik, Iceland"
}];


//Button Functions----------------------------


//When the start button is clicked, the game begins
$(document).on('click', '#start', function() {
game.start();
});

//On the game screen, when the submit button is clicked the game ends 
$(document).on('click', '#submit', function() {
game.end();
});


//Game Functionality--------------------------


//Varible holding the game
var game = {
right:0,
wrong:0,
clock:60,
countdown: function(){
    game.clock--;
    $('#clock-number').html(game.clock);

    if (game.clock === 0){
    console.log('TIME UP');
    game.end();
    }
},

//Game start function
start: function() {
    timer = setInterval(game.countdown, 1000);

    //Removes game start screen and displays the timer on the page
    $('#mainbody').prepend('<h2>Time Left: <span id="clock-number">60</span> Seconds</h2>');
    $('#start').remove();

    //Loops through the quiz array and displays each question and its answer choices
    for (var i = 0; i < quiz.length; i++) {
        quizBox.append('<h3>' + quiz[i].question + '</h3>');
        for (var j = 0; j < quiz[i].answers.length; j++) {
        quizBox.append('<input type="radio" name="question' + '-' + i + '" value="' + quiz[i].answers[j] + '">' + quiz[i].answers[j]);
        }
    }

    //Displays a submit button at the bottom of the quiz
    quizBox.append('<button id="submit">Submit</button>');
},

//Game end function
end: function() {

    //Checks each of the responses to determine right and wrong answers
    $.each($("input[name='question-0']:checked"), function() {
    if ($(this).val() == quiz[0].rightAnswer) {
        game.right++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == quiz[1].rightAnswer) {
        game.right++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-2']:checked"), function() {
    if ($(this).val() == quiz[2].rightAnswer) {
        game.right++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-3']:checked"), function() {
    if ($(this).val() == quiz[3].rightAnswer) {
        game.right++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-4']:checked"), function() {
    if ($(this).val() == quiz[4].rightAnswer) {
        game.right++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-5']:checked"), function() {
    if ($(this).val() == quiz[5].rightAnswer) {
        game.right++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-6']:checked"), function() {
    if ($(this).val() == quiz[6].rightAnswer) {
        game.right++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-7']:checked"), function() {
    if ($(this).val() == quiz[7].rightAnswer) {
        game.right++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-8']:checked"), function() {
        if ($(this).val() == quiz[8].rightAnswer) {
        game.right++;
        } else {
        game.wrong++;
        }
    });
    $.each($("input[name='question-9']:checked"), function() {
        if ($(this).val() == quiz[9].rightAnswer) {
        game.right++;
        } else {
        game.wrong++;
        }
    });

    this.result();
},
   
//Clears the quiz and shows the results
result: function() {

    clearInterval(timer);

    $('#mainbody h2').remove();
    quizBox.html('<h2>Finished!</h2>');
    quizBox.append('<h3>Right Answers: ' + this.right + '</h3>');
    quizBox.append('<h3>Wrong Answers: ' + this.wrong + '</h3>');
    quizBox.append('<h3>Unanswered: ' + (quiz.length - (this.wrong + this.right)) + '</h3>');
}
};