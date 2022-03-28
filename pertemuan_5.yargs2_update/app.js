const yargs = require("yargs");
const contacts = require("./contacts");

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
        name :{
            describe: 'Contact Name',
            demandOption: true,
            type:'string',
        },
    },
    //run saveContact
    handler(argv){
        contacts.detailContact(argv.name)
    }
});

yargs.command({
    command: 'delete',
    describe: 'delete contact',
    builder:{
        name :{
            describe: 'Contact Name',
            demandOption: true,
            type:'string',
        },
    },
    //run saveContact
    handler(argv){
        contacts.deleteContact(argv.name)
    }
});
yargs.parse();