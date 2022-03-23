const validator = require('validator');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name ? ', function (name) {
    rl.question('your mobile phone ? ', function (mobile) {
        if (validator.isMobilePhone(mobile, 'id-ID')){
            rl.question('your email ? ', function (email) {
                if (validator.isEmail(email)){
                  console.log(`Thank you ${name}, your mobile ${mobile}, and your email ${email}`);
                } else{
                  console.log(`your email is wrong`);
                  
                }
                rl.close();
            });
        } else {
            console.log(`your mobile phone is wrong`);
            rl.close();
        }
       
    });
  });


  