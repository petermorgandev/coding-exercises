// (TODO) Add user input functionality
let userName = 'Joe';
let userQuestion = 'Do you like pizza?';
let answers = ['It is certain','It is decidedly so','Reply hazy try again','Cannot predict now','Do not count on it','My sources say no','Outlook not so good','Signs point to yes'];
let randomNumber = Math.floor(Math.random() * answers.length);

function print() {
  !userName ? console.log(`Hello`) :
  console.log(
`Hello ${userName}
${userQuestion}
${answers[randomNumber]}`);
}
print();
