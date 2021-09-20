//If user adds,add it to local storage
let addBtn=document.getElementById('addBtn');
showNotes();
addBtn.addEventListener("click",function (e) {
    let addText=document.getElementById("addText");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.push(addText.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addText.value="";
    console.log(notesobj);
    showNotes();
    
})


//Function to show elements from local storage
function showNotes(){
    let html=" ";
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    
    notesobj.forEach(function (element,index) {

        html+=`<div class="noteCard mx-2 my-2 card " style="width: 18rem;">
               
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}"  onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
        </div>
      </div>`;


        
    
        
    });

    let notesElm=document.getElementById('Notes');
    if(notesobj.length != 0)
    {
         notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`Nothing to show! Use "Add a Note" section above to add notes.`;    }
}



//Funtion to delete note
function deleteNote(index){
    console.log(`I am deleting `,index);
    // let notes=localStorage.getItem("notes");
    // if(notes==null){
    //     notesobj=[];
    // }
    // else{
    //     notesobj=JSON.parse(notes);
    // }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    showNotes();
}


let search=document.getElementById('searchTxt');
search.addEventListener("input",function () {
    
    let inputval=search.value;
    console.log("input",inputval);
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerHTML;
        // console.log(cardTxt);
        if(cardTxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";

        }

    })
})