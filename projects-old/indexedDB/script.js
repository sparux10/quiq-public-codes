var db;
var databaseName = 'myDB';
var databaseVersion = 1;
var request = window.indexedDB.open(databaseName, databaseVersion);
request.onerror = function (event) {
    console.log(request.errorCode);
};

// create the Contacts object store and indexes
request.onupgradeneeded = (event) => {
    let db = event.target.result;

    // create the Contacts object store 
    // with auto-increment id
    let store = db.createObjectStore('Contacts', {
        autoIncrement: true
    });

    // create an index on the email property
    let index = store.createIndex('email', 'email', {unique: true});
};
function insertContact(db, contact) {
    // create a new transaction
    const txn = db.transaction('Contacts', 'readwrite');

    // get the Contacts object store
    const store = txn.objectStore('Contacts');
    //
    let queryc = store.put(contact);


    // handle success case
    queryc.onsuccess = function (event) {
        console.log(event);
    };

    // handle the error case
    queryc.onerror = function (event) {
        console.log(event.target.errorCode);
    }

    // close the database once the 
    // transaction completes
    txn.oncomplete = function () {
        db.close();
    };
}
request.onsuccess = (event) => {
    const db = event.target.result;

    insertContact(db, {
        email: 'john.doe@outlook.com',
        firstName: 'John',
        lastName: 'Doe',
        time: '2024',
        task: 'hello' })

    insertContact(db, {
        email: 'jane.doe@gmail.com',
        firstName: 'Jane',
        lastName: 'Doe',
        time: '2025',
        task: 'hello world' });
};



function getContactById(db, id) {
    const txn = db.transaction('Contacts', 'readonly');
    const store = txn.objectStore('Contacts');

    let query = store.get(id);

    query.onsuccess = (event) => {
        if (!event.target.result) {
            console.log(`The contact with ${id} not found`);
        } else {
            let response = event.target.result
            console.log(response.task);
            
        }
    };

    query.onerror = (event) => {
        console.log(event.target.errorCode);
    }

    txn.oncomplete = function () {
        db.close();
    };
};
request.onsuccess = (event) => {
    const db = event.target.result;
    getContactById(db, 1);
};
