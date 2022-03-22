const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name ? ', function (name) {
  rl.question('Where do you live ? ', function (country) {
    rl.question('how old are you ? ', function (old) {
        console.log(`${name}, is a citizen of ${country}, and ${old} year old`);
        rl.close();
    });
  });
});

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});