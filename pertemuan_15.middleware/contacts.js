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
    const contact = contacts.find((contact)=> contact.name === name);
    return contact;
}

// detail
const detailContact=(name) =>{
    const contacts = loadContact();
    const contact = contacts.find((contact)=> contact.name === name);
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

const DuplicateContact=(name) =>{
    const contacts = loadContact();
    const contact = contacts.find((contact)=> contact.name === name);
    return contact;
}

//delete 
const deleteContact =(name) =>{
    const contacts = loadContact();
    const newContacts = contacts.filter((contact)=> contact.name.toLowerCase() !== name.toLowerCase());
    if(contacts.length === newContacts.length){
        //console.log('${name} name not found');
        return false;
    }
    fs.writeFileSync('data/contacts.json',JSON.stringify(newContacts));
    //console.log('${name} deleted');
};

//delete 
const updateContact =(newname) =>{
    const contacts = loadContact();
    const newContacts = contacts.filter((contact)=> contact.name !== newname.oldname);
    if(contacts.length === newContacts.length){
        return false;
    }
    //memasukkan ke contacts.json
    console.log (newname.oldname)
    delete newname.oldname
    newContacts.push(newname);
    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));
};

// const checkboxes = document.querySelectorAll("input[type = 'checkbox']");
// console.log(checkbox);

// const checkAll= (mycheckbox)=>{
//     if (mycheckbox.checked == true){
//         checkbox.foreach(function(checkbox){
//             this.checkbox.checked = true;
//         });
//     }
//     else{
//         checkboxes.foreach(function(checkbox){
//             this.checkbox.checked = false
//         });
//     }
// }

//delete checkbox
// function deleteRow() {
//     document.querySelectorAll('#table .select:checked').forEach(e => {
//       e.parentNode.parentNode.remove()
//     });
//   }
// const deleteRow =() => {
//     const table = document.getElementById("table");
//     for (const [index, row] of [...table.rows].entries()) {
//       if (row.querySelector('input:checked')) {
//         table.deleteRow(index);
//       }
//     }
//   }

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

    //memasukkan ke contacts.json
    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Thank you!');
}

module.exports = {saveContact, listContact, detailContact, deleteContact, loadContact, DataContact, DuplicateContact, updateContact};
