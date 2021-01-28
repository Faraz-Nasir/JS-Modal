document.querySelector(".modal-container").style.visibility="hidden"


let btn=document.querySelector(".modal-btn")
btn.addEventListener("click",function(event){
    document.querySelector(".modal-container").style.visibility="visible"
    document.querySelector(".main-issue").style.visibility="hidden"
})

document.querySelector(".close-btn").addEventListener("click",function(event){
    document.querySelector(".modal-container").style.visibility="hidden"
    document.querySelector(".main-issue").style.visibility="visible"
    
})