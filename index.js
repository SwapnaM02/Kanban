const modalCont=document.querySelector('.modal-cont');
const addBtn=document.querySelector('.add-btn');
const mainCont=document.querySelector('.main-cont');
const textarea=document.querySelector('.text-area-cont')
const prioritycolor=document.querySelectorAll('.priority-color');
const removeBtn=document.querySelector('.remove-btn');





let addTaskFlag = false;
modalCont.style.display='none';
let selectedcolor='black';
let removeTaskFlag='false';


addBtn.addEventListener('click',function(e)
{
    // console.log(e.target);
    
  
    addTaskFlag=!addTaskFlag;
    if(addTaskFlag)
        {
            modalCont.style.display='flex';
            console.log(addTaskFlag);
        }
        else{
            modalCont.style.display='none';
            console.log(addTaskFlag);

        }

});

function CreateTicket(selectedcolor,text,id)
{
    const div=document.createElement('div');
    div.classList.add("ticket-cont");
    div.innerHTML=
    `<div class="ticket-color" style=background-color:${selectedcolor}>${selectedcolor}</div>
            <div class="ticket-id">${id}</div>
            <div class="task-area" contenteditable>${text}</div>
            <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
            </div>`

    mainCont.appendChild(div);


}

window.addEventListener('keydown', function(e){
   if(e.shiftKey)
    {
        const id=Math.ceil(Math.random()*100).toString();
        CreateTicket(selectedcolor,textarea.value,id);
        console.log("swapna");
        modalCont.style.display='none';
        textarea.value="";


    }

});


prioritycolor.forEach(color => color.addEventListener('click', function(e){
    prioritycolor.forEach(colordiv => {
        colordiv.classList.remove('active');
    })


    color.classList.add('active');
    selectedcolor=color.classList[0];
    console.log(selectedcolor);
    

}));





