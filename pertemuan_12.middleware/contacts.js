// const { Console } = require('console');
const fs = require('fs');
const validator = require('validator');

const dirpath= './data';
if(!fs.existsSync(dirpath)){
    fs.mkdirSync(dirpath);
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

const DataContact=(name) =>{
    const contacts = loadContact();
    const contact = contacts.find((contact)=> contact.name.toLowerCase() === name.toLowerCase());
    return contact;
}

// detail
const detailContact=(name) =>{
    const contacts = loadContact();
    const contact = contacts.find((contact)=> contact.name.toLowerCase() === name.toLowerCase());
    //fs.writeFileSync('data/contacts.json',JSON.stringify(contact));
    //const detail = contacts.find((contact)=> contact.name ===name);
    //contact.forEach((contact) =>{
    if (!contact){
        console.log('${name} name not found');
        return false;
    }
    console.log(contact.name);
    if(contact.email){
        console.log(contact.email)
    }
    console.log(contact.mobile)
    //});
};

//delete 
const deleteContact =(name) =>{
    const contacts = loadContact();
    //fs.writeFileSync('data/contacts.json',JSON.stringify(contact));
    
    const newContacts = contacts.filter((contact)=> contact.name.toLowerCase() !== name.toLowerCase());
    //contact.forEach((contact) =>{
        // if(deletes){
            //fs.writeFileSync('data/contacts.json',JSON.stringify(contact));
    //console.log(contact)
        //}
    // contact.forEach((contact, i) =>{
    //     if(contact.name !==name){
    //         fs.writeFileSync('data/contacts.json',JSON.stringify(contact));
    //     }
    // });
    if(contacts.length === newContacts.length){
        console.log('${name} name not found');
        return false;
    }
    fs.writeFileSync('data/contacts.json',JSON.stringify(newContact));
    console.log('${name} deleted');
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

module.exports = {saveContact, listContact, detailContact, deleteContact, loadContact, DataContact};

// const deleteContact = () => {
//     const contact = loadContact();
//     return axios.delete(contact);
// };

// make a function to ask
// const question = (ask) => {
//     return new Promise((resolve,rect) =>{
//         rl.question(ask, (inputVariable)=>{
//             resolve(inputVariable);
//         });
//     });
// };


