'use strict';

let subject;
let score = 0;

// My intention here was to make as reusable a function as possible
// to digest question objects of varying type (ex. yes/no, multiple choice, etc.)

function interrogator9000(qa) {
  let response = prompt(qa.query);                      // initial question
  if (qa.spec) {                                        // for q's w/ a specification
    if (qa.spec[0] === "subject") {                     // for 'subject' spec
      subject = response;
      alert(`Hey ${subject}, ${qa.retort[0]}`);
    } else if (qa.spec[0] === "multi") {                // for 'multi' spec
      if (Number.isInteger(qa.answer[0])) {               // if correct ans is numeric
        response = parseInt(response);                    // make user input numeric
      }
      let count = qa.spec[1];                             // set loop count from spec
      while (count--) {
        if (qa.answer.includes(response)) {               // handle correct ans
          score++;
          alert(qa.retort[0]);
          break;
        } else if (Number.isInteger(qa.answer[0])) {      // handle incorrect numeric
          response = parseInt(prompt((response < qa.answer[0]) ? qa.retort[1] : qa.retort[2]));
        } else {                                          // handle incorrect non-numeric
          response = prompt(qa.retort[1]);
        }
      }
    }                                                   // for default (y/n) spec
  } else if (qa.answer.includes(response)) {              // handle correct ans
    alert(qa.retort[0]);
    score++;
  } else {                                                // handle incorrect ans
    alert(qa.retort[1]);
  }
  return score;
}

// Each object has a query with possible retorts, correct answers, and specifications
// A spec of 'subject' denotes a username request
// 'false' defaults to yes/no handling
// 'multi' triggers a loop allowing multiple tries,
// The number after 'multi' is the loop count

const qa1 = {
  query: "Welcome! What name should I call you by?",
  retort: [`I'm Brandon`,],
  spec: ["subject",],
}

const qa2 = {
  query: "Am I bigger than a breadbox? (y/n)",
  retort: ["How'd you know!?","That's the wrong answer!",],
  answer: ["y",],
  spec: false,
}

const qa3 = {
  query: "Do I have a mustache? (y/n)",
  retort: ["sometimes I do","sometimes I don't",],
  answer: ["y","n"],
  spec: false,
}

const qa4 = {
  query: "Do I wanna play Magic? (y/n)",
  retort: ["I thought you'd never ask!","I ALWAYS want to play Magic...",],
  answer: ["y",],
  spec: false,
}

const qa5 = {
  query: "Would I rather be outside? (y/n)",
  retort: ["I'm already there!","I'm already there!",],
  answer: ["y",],
  spec: false,
}

const qa6 = {
  query: "guess a number 1-10",
  retort: ["excellent!","higher...","lower...",],
  answer: [6,],
  spec: ["multi", 4,],
}

const qa7 = {
  query: "These are a few of my favorite drinks...",
  retort: ["That is definitely one!","not on this list\nstay hydrated",],
  answer: ["water","coffee","beer","juice"],
  spec: ["multi", 6,],
}

// question objects could be easily added to the que
const lineOfQuerying = [qa1,qa2,qa3,qa4,qa5,qa6,qa7];
// loading objects into the machine
lineOfQuerying.forEach(qa => interrogator9000(qa));
// final message to page visitor
alert(`Well ${subject},\nI think we've got all the information we need.\nYou scored ${score} of 7!\nand btw, my favorite drinks are\n${qa7.answer}`);

// If you see where I could have done something better, shorter, or more efficiently
// I'd be delighted to hear about it.
// Thank you!

// The following is the 'no functions' version

// let username = prompt('Welcome! What name should I call you by?');
// // console.log(username);
// let question1 = prompt(`${username}! Am I bigger than a breadbox?\n(y/n)`).toLowerCase();
// // console.log(question1)
// alert((question1 == 'y') ? "How'd you know!?" : "That's the wrong answer!");
// let question2 = prompt('do I have a mustache?\n(y/n)').toLowerCase();
// // console.log(question2);
// alert("sometimes, true"); // both y and n are true, sometimes
// let question3 = prompt('do I wanna play Magic?\n(y/n)').toLowerCase();
// // console.log(question3);
// alert((question3 == 'y') ? "I thought you'd never ask!" : "Do YOU wanna play Magic?");
// let question4 = prompt('would I rather be outside?\n(y/n)').toLowerCase();
// // console.log(question4);
// alert("I'm probably outside right now!");
// let question5 = prompt("is it obvious that i'm enjoying myself?\n(y/n)").toLowerCase();
// // console.log(question5);
// alert((question5 == 'y') ? `Excellent!\nThanks for coming, ${username}!` : `I'll try harder next time!\nThanks for coming, ${username}!`);

// let question6 = parseInt(prompt("What's the password? It's a number between 1 and 10..."));
// let count = 3;
// while (question6 !== 6) {
//   // console.log(count);
//   if (count === 0) {
//     alert("The password is 6!");
//     break;
//   }
//   question6 = (question6 < 6) ? parseInt(prompt(`too low\n${count} more tries.`)) : parseInt(prompt(`too high\n${count} more tries.`));
//   count--;
// }
// if (question6 === 6) {
//     alert("Well done!");
//     score++;
// }

// const answers = [
//   {'water': 'stay hydrated'},
//   {'coffee': 'b l a c k'},
//   {'beer': 'only the finest belgians'},
//   {'juice': 'not from concentrate'},
// ];
// let question7 = prompt("these are a few of my favorite drinks...").toLowerCase();
// count = 5;
// let correct = 4;
// let x = true;
// while (count > 0) {
//   for (let i = 0; i < answers.length; i++) {
//     // console.log(answers[i][question7]);
//     if (answers[i][question7]) {
//       correct--;
//       score++;
//       question7 = prompt(`${answers[i][question7]}\nthere's ${correct} more on the list...`);
//       x = false;
//       break;
//     } else {
//         x = true;
//       }
//   }
//   if (x) {
//     // console.log(question7);
//     question7 = prompt(`not on the list\nthere's ${correct} more on the list...`)
//   }
//   count--;
// }

// let list = ''
// for (let i = 0; i < answers.length; i++) {
//   list += Object.keys(answers[i]) + ' ';
// }

// let questions1to5 = [question1,question2,question3,question4,question5];
// for (let i = 0; i < questions1to5.length; i++) {
//   if (questions1to5[i] == 'y') {
//     score++;
//   }
// }

// // console.log(list);
// alert(`here's the list\n${list}\n\nyou got ${score} right!`);