const modalCont=document.querySelector('.modal-cont');
const addBtn=document.querySelector('.add-btn');
const mainCont=document.querySelector('.main-cont');
const textarea=document.querySelector('.text-area-cont')

let addTaskFlag = false;
modalCont.style.display='none';


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

function CreateTicket()
{
    const div=document.createElement('div');
    div.classList.add("ticket-cont");
    div.innerHTML=
    `<div class="ticket-color">blue</div>
            <div class="ticket-id">123</div>
            <div class="task-area" contenteditable>random 1st task</div>
            <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
            </div>`

    mainCont.appendChild(div);


}

modalCont.addEventListener('keydown', function(e){
   if(e.shiftKey)
    {
        CreateTicket();
        console.log("swapna");
        modalCont.style.display='none';
        textarea.value="";

    }

});
