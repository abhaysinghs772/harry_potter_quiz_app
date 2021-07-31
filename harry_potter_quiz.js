
const readlineSync = require('readline-sync');
const chalk = require(`chalk`);

// console.log(chalk.bgYellow.blue(`hello world!`));

// var myName = `Abhay Kumar`;
var userScore = 0;
var highScore = 3;

console.log(`Are you a Harry Potter Series fan, then take part in this quiz`);

while (1) {

  var userName = readlineSync.question(chalk.cyan(`what is your name : `));
  console.log(chalk.green(`\nhello ${userName}! welcome to Hogwarts!\n`));

  console.log(chalk.yellow(`rules of the game: a question will asked to you and you have to only choose the correct option \n`));

  function checkAnswer(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (answer == userAnswer) {
      userScore++;
      console.log(chalk.blue(`absolutely correct\n and your score is ${userScore} \n`));
    } else {
      userScore--;
      console.log(chalk.red(`oopsie you choose the wrong option\n and your score is ${userScore} \n`));
    }
  }

  var q_and_a_pair =
    [
      {
        question: `Who is the Hufflepuff house ghost?
        a: Cuthbert Binns
        b: The Fat Friar
        c: The Gray Lady
        your answer: `,
        correct_Answer: `b`,
      },

      {
        question: `What is the name of the room Harry uses to teach Dumbledore's Army?
        a: The Perfect's Bathroom
        b: The Restricted section of the Library
        c: The Room of Requirement
        your answer: `,
        correct_Answer: `c`,
      },

      {
        question: `What is the name of the book Hermione supposes Voldemort used to learn about Horcruxes?
        a: Secrets of the Darkest Art
        b: Magic Moste Evil
        c: A Guide to Medieval Sorcery
        your answer: `,
        correct_Answer: `a`,
      },

      {
        question: `How many staircases does Hogwarts have?
        a: 152
        b: 163
        c: 142
        your answer: `,
        correct_Answer: `c`,
      },

      {
        question: `Which Hogwarts professor was rumoured to be a duelling champion in their youth?
        a: Professor Severus Snape
        b: Professor Filius Flitwick
        c: Professor Minerava Mcgonagall
        your answer: `,
        correct_Answer: `b`,
      },

      {
        question: `Which creatures pull the carriages that take students from the Hogwarts Express to the Castle?
        a: Hippogriffs
        b: Thestrals
        c: Menticores
        your answer: `,
        correct_Answer: `b`,
      },

      {
        question: `Where is the Slytherin common room located?
        a: Next to The Kitchens
        b: In the West Tower
        c: The Dungeons
        your answer: `,
        correct_Answer: `c`,
      },

      {
        question: `Slughorn teaches his students that Amortentia smells different to each person. What food does Harry smell?
        a: Pumpkin Juice
        b: Lemon Drops
        c: Treacle Tart
        your answer: `,
        correct_Answer: `c`,
      },

      {
        question: `Who was the headmaster of Hogwarts when the Chamber of Secrets was opened for the first time?
        a: Armando Dippet
        b: Albus Dumbledore
        c: Brutus Scrimgeour
        your answer: `,
        correct_Answer: `a`,
      },

      {
        question: `Who opened the Chamber Of Secrets for the third time?
        a: Ron Weasley 
        b: Tom Riddle
        c: Ginny Weasley
        your answer: `,
        correct_Answer: `c`,
      }
    ];

  for (var i = 0; i < q_and_a_pair.length; i++) {
    var currentQuestion = q_and_a_pair[i];
    checkAnswer(currentQuestion.question, currentQuestion.correct_Answer, currentQuestion);
  }

  // check whether the user has beat the high score or not
  if (userScore >= highScore) {
    console.log(chalk.cyan(`wow you beat the high score`));
    console.log(chalk.cyan(`your final score is: ${userScore} \nprivious high score was ${highScore}`));
  } else {
    console.log(chalk.cyan(`your final score is: ${userScore} \nhigh score is ${highScore}`));
  }

  highScore = userScore;
  userScore = 0;
  
  // Ask user to replay the game if they Want
  const playAgain = readlineSync.question(`do you want to play this game again \npress e to exit and any key restart again: `);

  if (playAgain == 'e') {
    console.log('exiting the loop: byyy');
    break;

  } else {
    continue;
  }
}