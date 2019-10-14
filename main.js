 const addButton = document.querySelector('.addButton'); 
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        //create the item dicv
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        /*let checkbox = document.createElement('input');
        checkbox.classList.add('checky');
        checkbox.type="checkbox";*/

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = "<i class='fas fa-pen'></i>";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "<i class='far fa-trash-alt'></i>";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        //itemBox.appendChild(checkbox);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
        

        /*checkbox.addEventListener('change', ()=>{
           if (checkbox.checked){
               input.style.textDecoration = "line-through";
           }
           else{
               input.style.textDecoration = "none";
           }
        });*/
        editButton.addEventListener('click', () => this.edit(input));
        removeButton.addEventListener('click', () => this.remove(itemBox));
    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);   

    }
}
function check() {
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}
addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
});


function checkForm(form)
  {
    if(!form.terms.checked) {
      alert("Welldone! You've completed your checklist.");
      form.terms.focus();
      return false;
    }
    return true;
  }