var list=document.getElementById("list");


function addTolist(){
 var item=document.getElementById("work")
 if(item.value==""){
    alert("Enter something")
} 
else{
 var li=document.createElement('li')
 var liText=document.createTextNode(item.value)
 li.appendChild(liText)
 li.setAttribute("class","input")
item.value=""

 //delete button
 var delBtn=document.createElement("button")
 var delText=document.createTextNode("DELETE")
 delBtn.setAttribute("class", "btn")
 delBtn.setAttribute("onclick", "delItem(this)")
 delBtn.appendChild(delText)
 li.appendChild(delBtn)

 //edit button
 var editBtn=document.createElement("button")
 var editText=document.createTextNode("EDIT")
 editBtn.setAttribute("class", "btn1")
 editBtn.setAttribute("onclick", "editText(this)")
 editBtn.appendChild(editText)
 li.appendChild(editBtn)


 list.appendChild(li)


 
 console.log(li)

}}

function delItem(e){
e.parentNode.remove()
}
function deleteAll(){
  
    list.innerHTML=""
}
function editText(e){
    var v = e.parentNode.firstChild.nodeValue;
    var editValue= prompt("Enter edit value", v)
    e.parentNode.firstChild.nodeValue =editValue

}