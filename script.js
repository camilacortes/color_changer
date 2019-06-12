// BUTTONS 

var buttonContainer = document.getElementById('button-container');

 // Change color of background to Red
 buttonContainer.addEventListener("click", function(event){
  var target = event.target;
  var bg = document.body.style.backgroundColor;
  var id = event.target.id;
  var tag = target.tagName;
  if (tag === 'BUTTON') {
    if(bg === id){
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = id;
    }
  }
});

// selectdown changing background color when option clicked. 

 var colorSelect = document.getElementById('colors');

 for (var i = 0; i < colors.length; i++) {
   var newOption = document.createElement('option');
   newOption.innerText = colors[i];
   newOption.value = colors[i];
   console.log(newOption.value);
   colorSelect.appendChild(newOption);
 }
 
 // Add new button 
var addNew = document.getElementById('add-new-container');
var addNewBtn = document.getElementById('add-new-btn');

//Add new button click function and background color 

addNewBtn.addEventListener('click', function(){
  if(colorSelect.selectedIndex !== 0){
    var newColorButton = document.createElement('BUTTON');
    newColorButton.innerText = colorSelect.value;
    newColorButton.style.backgroundColor = colorSelect.value;
    newColorButton.id = colorSelect.value;
    newColorButton.className = 'newColorButtons';
    buttonContainer.appendChild(newColorButton);
  }
});


// remove button 
var removeButton = document.getElementById('add-new-container');
var addRemoveButton = document.createElement('BUTTON');
addRemoveButton.innerText = 'Remove';
addRemoveButton.className = 'removeButton';
removeButton.appendChild(addRemoveButton);

//remove button function 

removeButton.addEventListener('click', function(){
  var bgColor = document.body.style.backgroundColor
  if(bgColor && bgColor !== 'white'){
    document.getElementById(bgColor).remove();
    document.querySelector('option[value=' + bgColor + ']').remove();
    document.body.style.backgroundColor = 'white';
  } 
})
 




