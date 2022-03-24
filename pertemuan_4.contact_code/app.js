const contacts = require('./contacts');
const fs = require('fs');
const readline = require('readline');

// membuat folder data apabila tidak ada
const dirpath= './data';
if(!fs.existsSync(dirpath)){
    fs.mkdirSync(dirpath);
}

//membuat file contats json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8');
}

const main = async() =>{
    const name = await contacts.question('What is your name ? ');
    const mobile = await contacts.question('your mobile phone ? ');
    const email = await contacts.question('your email ? ');
    contacts.saveContact(name, mobile, email);
};

main();

// const fs = require('fs');
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // membuat folder data apabila tidak ada
// const dirpath= './data';
// if(!fs.existsSync(dirpath)){
//     fs.mkdirSync(dirpath);
// }

// //membuat file contats json jika belum ada
// const dataPath = './data/contacts.json';
// if(!fs.existsSync(dataPath)){
//     fs.writeFileSync(dataPath,'[]','utf-8');
// }

// // make a function to ask
// const question = (ask) => {
//     return new Promise((resolve,rect) =>{
//         rl.question(ask, (inputVariable)=>{
//             resolve(inputVariable);
//         });
//     });
// };

// const main = async () =>{
//     const name = await question('What is your name ? ');
//     const mobile = await question('your mobile phone ? ');
//     const email = await question('your email ? ');
//     const contact = {name, mobile, email};
//     const file = fs.readFileSync('data/contacts.json', 'utf8');
//     const contacts =JSON.parse(file);
//     contacts.push(contact);
//     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
//     console.log('Terima kasih sudah memasukkan data!');
//     rl.close();
// }

// main();

