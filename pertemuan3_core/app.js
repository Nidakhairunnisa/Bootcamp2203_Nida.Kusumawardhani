const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name ? ', function (name) {
  rl.question('your mobile phone ? ', function (mobile) {
    rl.question('your email ? ', function (email) {
        console.log(`Thank you ${name}, your mobile ${mobile}, and your email ${email}`);
        rl.close();
    });
  });
});

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});