const URL_ENDPOINT = "http://localhost:8000/api";
let CONTACTS;

let contact = {
    id: "",
    name: "",
    surname: "",
    phone: "",
};

const getContacts = async () => {
    const data = await fetch(URL_ENDPOINT + "/contacts");
    return data.json();
};

const CONTACTS_CONTAINER = document.querySelector("#container");
const FORM_CONTAINER = document.querySelector("#form");

const renderContacts = (contacts) => {
    contacts.forEach(({ id, name, surname, phone }) => {
        CONTACTS_CONTAINER.innerHTML += `
    <tr>
        <th>${name}</th>
        <th>${surname}</th>
        <th>${phone}</th>
        <th>
            <button type="submit" class="btn btn-primary text-light" onclick="valuesContacts('${id}')">Edit</button>
            <button type="submit" class="btn btn-warning text-light" onclick="showContact('${id}')">Show</button>
            <button type="submit" class="btn btn-danger" onclick="deleteContact('${id}'), location.reload()">Delete</button>
        </th>
    </tr>`;
    });
};

const renderContact = (contact) => {
    CONTACTS_CONTAINER.innerHTML = `
    <tr>
        <th>${contact.name}</th>
        <th>${contact.surname}</th>
        <th>${contact.phone}</th>
        <th>
            <button type="submit" class="btn btn-primary text-light" onclick="valuesContacts('${contact.id}')">Edit</button>
            <button type="submit" class="btn btn-danger" onclick="deleteContact('${contact.id}'), location.reload()">Delete</button>
        </th>
    </tr>`;
};

function deleteContact(id) {
    fetch(`http://localhost:8000/api/contacts/${id}`, {
        method: "DELETE",
    });
}

function showContact(id) {
    fetch(`http://localhost:8000/api/contacts/${id}`)
        .then((res) => res.json())
        .then((data) => {
            renderContact(data);
        });
}

function createContact(contact) {
    fetch("http://localhost:8000/api/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
    });
}

function createContactSubmit() {
    let name1 = document.getElementById("name");
    let surname = document.getElementById("surname");
    let phone = document.getElementById("phone");

    contact = {
        name: name1.value,
        surname: surname.value,
        phone: phone.value,
    };

    createContact(contact);
}

function renderFormCreate() {
    FORM_CONTAINER.innerHTML = `
    <form id="form">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name">
        </div>
        <div class="mb-3">
            <label for="surname" class="form-label">Surname</label>
            <input type="text" class="form-control" id="surname">
        </div>
        <div class="mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input type="number" class="form-control" id="phone">
        </div>
        <button type="submit" class="btn btn-primary"  onclick="createContactSubmit()">Submit</button>
    </form>

  `;
}

function editContact(contact) {
    fetch(`http://localhost:8000/api/contacts/${contact.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
    });
}

function editContactSubmit(id) {
    let name1 = document.getElementById("name");
    let surname = document.getElementById("surname");
    let phone = document.getElementById("phone");

    contact = {
        id: id,
        name: name1.value,
        surname: surname.value,
        phone: phone.value,
    };

    editContact(contact);
}

function valuesContacts(id) {
    fetch(`http://localhost:8000/api/contacts/${id}`)
        .then((res) => res.json())
        .then((data) => {
            renderFormEdit(data, id);
        });
}

function renderFormEdit(contact, id) {
    FORM_CONTAINER.innerHTML = `
    <form id="form">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" value="${contact.name}">
        </div>
        <div class="mb-3">
            <label for="surname" class="form-label">Surname</label>
            <input type="text" class="form-control" id="surname" value="${contact.surname}">
        </div>
        <div class="mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input type="number" class="form-control" id="phone" value="${contact.phone}">
        </div>
        <button type="submit" class="btn btn-primary"  onclick="editContactSubmit(${id})">Submit</button>
    </form>

  `;
}

window.addEventListener("load", () => {
    getContacts().then((data) => {
        renderContacts(data);
    });
});
