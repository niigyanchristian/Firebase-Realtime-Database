 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

 const firebaseConfig = {
   apiKey: "",
   authDomain: "",
   databaseURL: "",
   projectId: "",
   storageBucket: "",
   messagingSenderId: "",
   appId: ""
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 import { getDatabase, ref,child,get,set,update, remove } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";


 const db = getDatabase();

//  inputs
 let nameInp =document.getElementById('name');
 let idInp = document.getElementById('id');
 let idSearch = document.getElementById('id-search');
 let nameUpd = document.getElementById('name-upd');

// buttons
 let AddBtn = document.getElementById('AddBtn');
 let GetBtn = document.getElementById('GetBtn');
 let UpdateBtn = document.getElementById('UpdateBtn');
 let DeleteBtn = document.getElementById('DeleteBtn');


 function AddData(){
    set(ref(db,'Students/'+idInp.value),{
        nameofStudent: nameInp.value,
        idofStudent: idInp.value
    }).then(()=>{
        nameInp.value=''
        idInp.value = ''
        alert("Student added successfully!");
    }).catch((error)=>{
        console.log(error);
        alert('Unsuccessful');
    })

 }

 function RetData(){
    const dbRef = ref(db);
    get(child(dbRef,'Students/'+idSearch.value)).then((snapshot)=>{
        if(snapshot.exists()){
            nameUpd.value = snapshot.val().nameofStudent;
        }else{
            alert("Student doest not exist");
        }
    }).then(()=>{
        alert('Successfully')
    }).catch((e)=>{
        alert('Unsucceful')
        console.log(e)
    })
 }

function UpdateData(){
    update(ref(db,'Students/'+idSearch.value),{
        nameofStudent:nameUpd.value
    }).then(()=>{
        alert('Successfully Updated');
    }).catch((e)=>{
        alert('Unsucceful')
        console.log(e)
    })
}

function DeleteData(){
    remove(ref(db,'Students/'+idSearch.value)).
    then(()=>{
        idSearch.value=''
        nameUpd.value=''
        alert('Data deleted successfully!')
    })
}


 AddBtn.addEventListener('click',AddData);
 GetBtn.addEventListener('click',RetData);
UpdateBtn.addEventListener('click',UpdateData);
DeleteBtn.addEventListener('click',DeleteData);
