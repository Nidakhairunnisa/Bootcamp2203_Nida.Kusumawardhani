const fs = require('fs');
const validator = require('validator');
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// membuat folder data apabila tidak ada
const dirpath= './data';
if(!fs.existsSync(dirpath)){
    fs.mkdirSync(dirpath);
}


const saveContact = (name, mobile, email) =>{
    const contact = {name, mobile, email};
    if (!validator.isMobilePhone(mobile, 'id-ID')){
        console.log('your mobile phone is wrong')
    }
    if (validator.isEmail(email)){
        console.log(`your email is wrong`);
    }
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts =JSON.parse(file);


    const duplicate=contacts.find((contact)=> contact.name ===name);
    if(duplicate){
        console.log('Contact name is already recorded. Use another contact name.');
        return false;
    }
    
    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Thank you!');
    // rl.close();
}

// make a function to ask
// const question = (ask) => {
//     return new Promise((resolve,rect) =>{
//         rl.question(ask, (inputVariable)=>{
//             resolve(inputVariable);
//         });
//     });
// };

module.exports = {saveContact};
