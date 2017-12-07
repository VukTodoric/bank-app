var db = [
  {
    id : 1,
    name : "Danilo",
    deposit : 11100,
    cCard : "Visa"
  },
  {
    id : 2,
    name : "Vuk",
    deposit : 331100,
    cCard : "American Expres"
  },
  {
    id : 3,
    name : "Suzana",
    deposit : 110,
    cCard : "Master"
  },
  {
    id : 4,
    name : "Jovan",
    deposit : 34100,
    cCard : "Dina"
  }
];
var tBody = document.getElementsByTagName('tbody')[0],
    editBody = document.getElementById('editBody'),
    accBtn = document.getElementById('accBtn'),
    addAccBtn = document.getElementById('addAccBtn'),
    editDelBtn = document.getElementById('editDelBtn'),
    mainRow = document.getElementById('mainRow'),
    editRow = document.getElementById('editRow'),
    formRow = document.getElementById('formRow'),
    editFormRow =document.getElementById('editFormRow'),
    addToDoBtn = document.getElementById('addToDoBtn'),
    formId = document.getElementsByName('id')[0],
    formName = document.getElementsByName('name')[0],
    formDeposit = document.getElementsByName('deposit')[0],
    formCcard = document.getElementsByName('cCard')[0],
    editIdField = document.getElementsByName('editId')[0],
    editNameField = document.getElementsByName('editName')[0],
    editDepositField = document.getElementsByName('editDeposit')[0],
    editCcardField = document.getElementsByName('editCcard')[0],
    editDbAccBtn = document.getElementById('editDbAccBtn'),
    pos;


createTable();

    addAccBtn.addEventListener('click',showForm);
    accBtn.addEventListener('click',createTable);
    addToDoBtn.addEventListener('click',addAccToDb);
    editDelBtn.addEventListener('click',createEditTable);
    editDbAccBtn.addEventListener('click',editAccountInDb);
// tBody.innerHTML = "<tr><td>"+db[0].id+"</td><td>"+db[0].name+"</td><td>"+db[0].deposit+"</td><td>"+db[0].cCard+"</td></tr>";

// for (var i = 0; i < db.length; i++) {
//   tBody.innerHTML += "<tr><td>"+db[i].id+"</td><td>"+db[i].name+"</td><td>"+db[i].deposit+"</td><td>"+db[i].cCard+"</td></tr>";
// }

function createTable() {
  mainRow.style.display = "block";
  formRow.style.display = "none";
  editRow.style.display = "none";
  editFormRow.style.display = "none";

  var text = "";
  for (var i = 0; i < db.length ; i++) {
    text += `
    <tr>
       <td>${db[i].id}</td>
       <td>${db[i].name}</td>
       <td>${db[i].deposit}</td>
       <td>${db[i].cCard}</td>
    </tr>
    `
  }
  tBody.innerHTML = text;
}

function createEditTable() {
  mainRow.style.display = "none";
  formRow.style.display = "none";
  editFormRow.style.display = "none";
  editRow.style.display = "block";
  var text = "";
  for (var i = 0; i < db.length ; i++) {
    text += `
    <tr>
       <td>${db[i].id}</td>
       <td>${db[i].name}</td>
       <td>${db[i].deposit}</td>
       <td>${db[i].cCard}</td>
       <td><button data-pos = "${i}" class = "btn btn-warning btn-sm edit ${i}">&nbsp;Edit&nbsp;</button></td>
       <td><button id="${i}" class = "btn btn-danger btn-sm delete ">&nbsp;Delete&nbsp;</button></td>
    </tr>
    `
  }
editBody.innerHTML = text;
var deleteBtns = document.getElementsByClassName('delete');
var editBtns = document.getElementsByClassName('edit');

for (var i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener('click',deleteAccount);
  editBtns[i].addEventListener('click',editAccount)
}
}


function showForm() {
   mainRow.style.display = "none";
   editRow.style.display = "none";
   editFormRow.style.display = "none";
   formRow.style.display = "block";

}

function addAccToDb() {
 var idVal = formId.value;
 var nameVal = formName.value;
 var depositVal = formDeposit.value;
 var cCardVal = formCcard.value;
 var newAccount = {
   id : idVal,
   name : nameVal,
   deposit : depositVal,
   cCard : cCardVal
 }
db.push(newAccount);
createTable();
}
function deleteAccount() {
db.splice(this.id,1);
createTable();
}

function editAccount() {
editFormRow.style.display = "block";
editRow.style.display = "none";
// console.log(this.className[this.className.length -1]);
 pos = this.getAttribute('data-pos');
var currentAccount = db[pos];
editIdField.value = currentAccount.id;
editNameField.value = currentAccount.name;
editDepositField.value = currentAccount.deposit;
editCcardField.value = currentAccount.cCard;

}
function editAccountInDb() {
  var newAcc = {
    id : editIdField.value,
    name : editNameField.value,
    deposit : editDepositField.value,
    cCard : editCcardField.value
  }
  db[pos] = newAcc;
  createTable();
}
