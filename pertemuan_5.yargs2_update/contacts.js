const fs = require('fs');
const validator = require('validator');

const dirpath= './data';
if(!fs.existsSync(dirpath)){
    fs.mkdirSync(dirpath);
}

//membuat file contats json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8');
}

const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts =JSON.parse(file);
    return contacts;
}

const listContact =() =>{
    const contacts = loadContact();
    console.log('Contact List :');
    contacts.forEach((contact, i) =>{
        console.log(`${i+1}. ${contact.name} - ${contact.mobile}`);
    });
};

// detail
const detailContact= (name) =>{
    const contacts = loadContact();
    const contact = contacts.find((contact)=> contact.name.toLowerCase() === name.toLowerCase());
    if (!contact){
        console.log('${name} name not found');
        return false;
    }
    console.log(contact.name);
    if(contact.email){
        console.log(contact.email)
    }
    console.log(contact.mobile)
};

//delete 
const deleteContact = (name) =>{
    const contacts = loadContact();
    const newContacts = contacts.filter((contact) => contact.name.toLowerCase() !== name.toLowerCase());
    if(contacts.length === newContacts.length){
        console.log( name, 'name not found');
        return false;
    }
    fs.writeFileSync('data/contacts.json',JSON.stringify(newContacts));
    console.log(name, 'deleted');
};

// save data contact
const saveContact = (name, email, mobile) =>{
    const contact = {name, email, mobile};
    
    //validator mobile dan email
    if (email){
        if (!validator.isEmail(email)){
            console.log(`your email is wrong`);
            return false;
        }
    }

    if (!validator.isMobilePhone(mobile, 'id-ID')){
        console.log('your mobile phone is wrong')
        return false;
    }


    const contacts = loadContact();
    //mengecek duplicate
    const duplicate=contacts.find((contact)=> contact.name ===name);
    if(duplicate){
        console.log('Contact name is already recorded. Use another contact name.');
        return false;
    }

    //memasukkan ke contacts.json
    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Thank you!');
    // rl.close();
}

module.exports = {saveContact, listContact, detailContact, deleteContact};