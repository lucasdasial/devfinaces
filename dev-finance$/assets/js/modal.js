const  newTransaction = document.querySelector(".button.new");
const modal = document.querySelector(".modal-overlay");
const close = document.querySelector(".btn-cancel")

newTransaction.addEventListener("click",()=>{
    modal.classList.add("show")
})

close.addEventListener("click",()=>{
    modal.classList.remove("show")
})
    


    

    
    