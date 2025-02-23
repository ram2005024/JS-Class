arrayForList=[];
function onClickFunction(){
  inputElement=document.querySelector('.listInput');
  inputText=inputElement.value;
  dateElement=document.querySelector('.myDate');
  dateText=dateElement.value;
arrayForList.push({listName:inputText, listDate: dateText});
inputElement.value = '';
dateElement.value = '';
displayList();
 
}
function displayList(){
DivList=document.querySelector('.myList');
DivList.innerText='';
let newHtml = '';

  for(let i=0; i<arrayForList.length; i++){
    item=arrayForList[i].listName;
    date=arrayForList[i].listDate;
newHtml+=`<div class="itemCont"><div><span class="item">${item}</span></div><div><span class="date">${date}</span></div><div><button class="deleteButton" onclick="
arrayForList.splice(${i},1);
displayList();
">Delete</button></div></div>`;
  } 
DivList.innerHTML=newHtml;
}
