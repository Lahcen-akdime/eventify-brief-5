let sideBtn = document.querySelectorAll(".sidebar__btn");
let events = [];
let archive = [];
let totalevents = 0;
let totalseats = 0;
let totalprices = 0;
let index = 0 ;
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

//====================== add an other variant ==============================//
const btnaddvariant = document.getElementById("btn-add-variant");
btnaddvariant.addEventListener("click", (e)=>{
     const parent = document.getElementById("variants-list");
     const enfant = document.createElement("div");
     enfant.classList.add("variant-row");
    
    enfant.innerHTML+=`<input type="text" class="input variant-row__name" placeholder="Variant name (e.g., 'Early Bird')" />
  <input type="number" class="input variant-row__qty" placeholder="Qty" min="1" />
  <input type="number" class="input variant-row__value" placeholder="Value" step="0.01" />
  <select class="select variant-row__type">
  <option value="fixed">Fixed Price</option>
  <option value="percentage">Percentage Off</option>
  </select>
  <button type="button" class="btn btn--danger btn--small variant-row__remove" onclick="RemoveVariant(this)">Remove</button>`
    parent.appendChild(enfant);
});
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
//============================== Statistics ==================================//
totalevents++; 
totalseats += Number(eventseats);
totalprices += Number(eventprice);
localStorage.setItem("totalevents",totalevents);
localStorage.setItem("totalseats",totalseats);
localStorage.setItem("totalprices",totalprices);
document.getElementById("stat-total-events").innerHTML=`${totalevents}`
document.getElementById("stat-total-seats").innerHTML=`${totalseats}`
document.getElementById("stat-total-price").innerHTML=`$${totalprices}`
//======================= Stocker un variant ==============================//

let rows = document.querySelectorAll(".variant-row");
let variant =[];
rows.forEach((row, index) => {
let variantname = row.querySelector(".variant-row__name").value;
let qty = row.querySelector(".variant-row__qty").value;
let value = row.querySelector(".variant-row__value").value;
let poursentage_fix = row.querySelector(".variant-row__type").value;
variant.push({
      id: index + 1,
      row_name: variantname,
      row_qty: qty,
      row_value:value,
      row_type: poursentage_fix,
    });
  });
//======================= l'object principale ===================================//
let allinforminformations=({eventtitle,
    ImageURL,
    eventdescription,
    eventseats,
    eventprice,
    variant});
//===================== stocker les info du formulaire ====================//
let allevents=JSON.parse(localStorage.getItem('Evenements'))||[];
allevents.push(allinforminformations);

 localStorage.setItem("Evenements" ,JSON.stringify(allevents));

 affichageevent()
}
})

//======================= Delete a variant ================================//
// let btnvariantsdelete = document.getElementsByClassName("btn btn--danger btn--small variant-row__remove");
// btnvariantsdelete.forEach(element => addEventListener("click",(e)=>{
// }));
//====================== Affichage des evennements ========================//
function affichageevent(){
    let eve  = JSON.parse(localStorage.getItem("Evenements"))||[];
    console.log(eve)
    let tablelist = document.querySelector(".table__body");
    for(element of eve){
        console.log(tablelist)
        tablelist.innerHTML +=` <tr class="table__row" data-event-id="1"><td>${index+1}</td><td>${element.eventtitle}</td><td>${element.eventseats}
        </td><td>$${element.eventprice}</td><td><span class=badge>${element.variant?element.variant.length :0}</span></td><td>
        <button class='btn btn--small' data-action='details' data-event-id='1'>Details</button>
        <button class='btn btn--small' data-action='edit' data-event-id='1'>Edit</button>
        <button class='btn btn--danger btn--small' data-action='archive' data-event-id='1' onclick=deletelist(${index})>Delete</button></td>  </tr>`
        index++;
    }
}
//========================= Delete a list ====================================//
deletelist(){

}


//============================= Buble sort zone ==============================//



