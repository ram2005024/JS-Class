 let inputElement;
 let dateElement;
 let inputText;
 let dateText;
let arrayItems=[];
 function addFunction(){
inputElement=document.querySelector('.inputItem');
inputText=inputElement.value;
dateElement=document.querySelector('.dateItem');
dateText=dateElement.value;
arrayItems.push({itemText:inputText,itemDate:dateText} );
inputElement.value='';
dateElement.value='';
display();
}
function display(){
let newHtml='';
choosedElement=document.querySelector('.choosedContainer');
for(i=0; i<arrayItems.length; i++){
itemName=arrayItems[i].itemText;
dateName=arrayItems[i].itemDate;
  newHtml+=`<div class="mainDiv"><div class="span inputSpan"><span class="itemNameSpan">${itemName}</span></div>
  <div class="span dateSpan"><span class="dateNameSpan">${dateName}</span></div>
  <div class=" span deleteButton"><button class="myDeleteButton" onclick="
  arrayItems.splice(${i },1);
  display();
  ">Delete</button></div></div>`
}
choosedElement.innerHTML=newHtml;
}
