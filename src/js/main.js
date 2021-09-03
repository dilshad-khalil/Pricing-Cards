const button  = document.querySelector(".plan-btn");
const proPrice = document.querySelector(".price.pro");
const basicPrice = document.querySelector(".price.basic")
const masterPrice = document.querySelector(".master.price");
button.addEventListener('click' , function(){
    button.classList.toggle("clicked");

    if(button.classList.contains("clicked")){
        proPrice.innerHTML = "24.99";
        basicPrice.innerHTML = "19.99";
        masterPrice.innerHTML = "39.99";
    }
       
    else{
        proPrice.innerHTML = "249.99";
        basicPrice.innerHTML = "199.99"
        masterPrice.innerHTML = "399.99";
    }
        
    
})
