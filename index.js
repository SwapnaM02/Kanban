const modalCont=document.querySelector('.modal-cont');
const addBtn=document.querySelector('.add-btn');

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
