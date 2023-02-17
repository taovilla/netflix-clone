const faqs = document.querySelectorAll(".faq");
const form = document.querySelector("#form");
const  email = document.querySelector("#email")

faqs.forEach(faq =>{
    faq.addEventListener("click" ,() =>{
faq.classList.toggle("active");
    })
})


//form validation

