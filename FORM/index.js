function clearErrors() {

  errors = document.getElementsByClassName('formerror');
  for (let item of errors) {
    item.innerHTML = "";
  }

}


function seterror(id, error) {

  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
  var returnval = true;
  clearErrors();

  var phone = document.forms['myForm']["fphone"].value;
  if (phone.length != 10) {
    seterror("phone", "*Phone number should be of 10 digits!");
    returnval = false;
  }

  var pass = document.forms['myForm']["passs"].value;


  if (pass.search(/[2][0][1-2]+[1-9]+[A-B]+[0-9]+[P]+[S]+[0-9]{4}[P]/) == -1) {
    seterror("pass", "*Incorrect Format");
    returnval = false;
  }


  if (pass.length != 13) {
    seterror("pass", "*Incorrect Format");
    returnval = false;
  }


  if (pass.search(/[0-9]/) == -1) {
    seterror("pass", "*Incorrect Format!");
    returnval = false;

  }

  return returnval;
}






  // ADD EVENTS

  // ADDING EVENTS TO LOCAL STORAGE

  showNotes();
  let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";

 

    showNotes();
  });

  // FUNCTION TO SHOW EVENTS FROM LOCAL STORAGE

  function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
      html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-bodys">
                          <h2 class="cardT"style="padding-left:10px;color:black; font-family:dancing script;"><u>Event ${index + 1}</u></h2>
                          <h3 class="card-text"style="color:black; background-color:#ff9999 ; width:fit-content; font-size:25px;"> ${element}</h3><br>
                          <button id="${index}"onclick="deleteNote(this.id)" class="but1"style="border-radius: 9px;
    width: 90px;
    height: 50px;
    font-size: 20px
    margin: 22px 20px;
    background-color: black;
    color: #ff9999;
    font-weight: bolder;
    border: #ff9999 solid 5px;">Delete Event</button>
                      </div>
                  </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
      notesElm.innerHTML = html;
    } else {
      notesElm.innerHTML = ``;
    }
  }

  // FUNCTION TO DELETE EVENT

  function deleteNote(index) {

  

    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }
  







