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
   //======================= form validation ==============================//
let myform = document.getElementsByTagName("form")[0] ;
let counter = 1;
myform.addEventListener("submit" , (e)=> {
e.preventDefault();
let eventtitle = document.getElementById("event-title").value;
let ImageURL = document.getElementById("event-image").value;
let eventdescription = document.getElementById("event-description").value;
let eventseats = document.getElementById("event-seats").value;
let eventprice = document.getElementById("event-price").value;
if(eventtitle.value==" "){
    eventtitle.style.border="1px solid red";
}
else{
alert("formulaire validée");

//======================= Stocker un variant ==============================//
let variantname = document.getElementsByClassName("variant-row__name").value;
let qty = document.getElementsByClassName("variant-row__qty").value;
let value = document.getElementsByClassName("variant-row__value").value;
let poursentage_fix = document.getElementsByClassName("variant-row__type").value;
let variant =[];
 variant.push({
id : counter ,
name : variantname ,
qtyvalue : qty ,
valuee : value,
poursentageoufix : poursentage_fix,
})
counter++;
//======================= variants storage ===================================//
let allinforminformations=({eventtitle,
    ImageURL,
    eventdescription,
    eventseats,
    eventprice,
    variant});

//===================== stocker les info du formulaire ====================//
let allevents=JSON.parse(localStorage.getItem('Evenements'))||[];
allevents.push(allinforminformations);
// console.log(allevents)

 localStorage.setItem("Evenements" ,JSON.stringify(allevents));

 affichageevent()
}
})
//====================== add an other variant ==============================//
let index;
const btnaddvariant = document.getElementById("btn-add-variant");
btnaddvariant.addEventListener("click", (e)=>{
    document.getElementsByClassName("variant-row")[0].innerHTML+=`<input type='text' 
    class='input variant-row__name' placeholder='Variant name (e.g., 'Early Bird')' />
    <input type='number' class='input variant-row__qty' placeholder='Qty' min='1' />
    <input type='number' class='input variant-row__value' placeholder='Value' step='0.01' />
    <select class='select variant-row__type'><option value='fixed'>Fixed Price</option>
    <option value='percentage'>Percentage Off</option></select><button type='button' 
    class='btn btn--danger btn--small variant-row__remove'>Remove</button>`
    index++;
});
//======================= Delete a variant ================================//
// let btnvariantsdelete = document.getElementsByClassName("btn btn--danger btn--small variant-row__remove");
// btnvariantsdelete.forEach(element => addEventListener("click",(e)=>{
// }));
//====================== Affichage des evennements ========================//
function affichageevent(){
    let eve  = JSON.parse(localStorage.getItem("Evenements"));
    console.log(eve)
    for(element of eve){
    let body =document.querySelector(".table__row");
    console.log(body)
    body.innerHTML=`<td>1</td><td>${element.eventtitle}</td><td>${element.eventseats}
    </td><td>$${element.eventprice}</td><td><span class=badge>${index}</span></td><td><button class='btn btn--small' data-action='details'
     data-event-id='1'>Details</button><button class='btn btn--small' data-action='edit' data-event-id='1'>Edit
     </button><button class='btn btn--danger btn--small' data-action='archive' data-event-id='1'>Delete</button></td>`
     }
}
affichageevent();