let sideBtn = document.querySelectorAll(".sidebar__btn");
let events = [];
let archive = [];
let screens = document.querySelectorAll("section[data-screen]");
let title = document.getElementsByClassName("page-header__content")[0];

sideBtn.forEach(element => {
    element.addEventListener('click', (e)=> {

    sideBtn.forEach(element => element.classList.remove('is-active'))
    element.classList.add('is-active')
    //================ change the title ==================//
    let selection = element.querySelectorAll("span")[1].textContent;
    console.log(selection)
    if(selection=="Add Event"){
        title.querySelector("h2").innerHTML=selection;
        title.querySelector("p").innerHTML="Write the informations of your event";
    }
    else if(selection=="Events"){
        title.querySelector("h2").innerHTML=selection;
        title.querySelector("p").innerHTML="The list of the events";
    }
    else if(selection=="Archive"){
        title.querySelector("h2").innerHTML=selection;
        title.querySelector("p").innerHTML="You can restore an archive";
    }
    else{
        title.querySelector("h2").innerHTML="Statistics";
        title.querySelector("p").innerHTML="Overview of your events";
    }
    //========================= change screen ===========================//

    screens.forEach(screen => screen.classList.toggle('is-visible', screen.dataset.screen === element.dataset.screen))
    })
})
//========================= form validation ==============================//
let myform = document.getElementsByTagName("form")[0] ;
console.log(myform)
myform.addEventListener("submit" , (e)=> {
e.preventDefault();
let eventtitle = document.getElementById("event-title");
let ImageURL = document.getElementById("event-image").value;
let eventdescription = document.getElementById("event-description").value;
let eventseats = document.getElementById("event-seats").value;
let eventprice = document.getElementById("event-price").value;
if(eventtitle.value==" "){
    eventtitle.style.border="1px solid red";
}
else{
alert("formulaire validée");
}
})
//====================== add variant =====================================//
let variantsparent = document.getElementById("variants-list");
const btnaddvariant = document.getElementById("btn-add-variant");
let variantform = document.getElementsByClassName("variant-row")[0];
btnaddvariant.addEventListener("click", (e)=>{
const addonevariantform = variantform.innerHTML;
variantform.innerHTML+=addonevariantform;
});




    