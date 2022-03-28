const { describe, demandOption } = require("yargs");
const yargs = require("yargs");
const contacts = require("./contacts"); //call contacts.js

yargs.command({
    command: 'add',
    describe: 'add new contact',
    builder:{
        name :{
            describe: 'Contact Name',
            demandOption: true,
            type:'string',
        },
        email:{
            describe: 'Contact Email',
            demandOption: false,
            type:'string',
        },
        mobile:{
            describe: 'Contact Mobile Phone Number',
            demandOption: true,
            type:'string',
        },
    },
    
    //show contact list
    handler(argv){
        const contact = {
            name:argv.name,
            email:argv.email,
            mobile:argv.mobile,
        };
        console.log(contact);
    },
    //run saveContact
    handler(argv){
        contacts.saveContact(argv.name,argv.email, argv.mobile)
    }
});
yargs.command({
    command: 'list',
    describe: 'see contact list',
    handler(){
        contacts.listContact();
    },
});

yargs.command({
    command: 'detail',
    describe: 'see contact detail',
    builder:{
        name: {
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
        // email:{
        //     describe: 'Contact Email',
        //     demandOption: false,
        //     type: 'string',
        // },
        // mobile:{
        //     describe: 'Contact mobile',
        //     demandOption: true,
        //     type: 'string',
        // },
    },
    // handler(argv){
    //     const contact = {
    //         name:argv.name,
    //         // email:argv.email,
    //         // mobile:argv.mobile,
    //     };
    // },
    handler(argv){
        contacts.detailContact(argv.name)
    }
});

yargs.command({
    command: 'delete',
    describe: 'delete contact',
    builder:{
        name: {
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
    },
    handler(){
        contacts.deleteContact();
    },
});
yargs.parse();


// const contacts = require('./contacts');
// const fs = require('fs');
// const readline = require('readline');


// const main = async() =>{
//     const name = await contacts.question('What is your name ? ');
//     const mobile = await contacts.question('your mobile phone ? ');
//     const email = await contacts.question('your email ? ');
//     contacts.saveContact(name, mobile, email);
// };

// main();

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

