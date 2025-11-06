let sideBtn = document.querySelectorAll(".sidebar__btn");
let events = [];
let archive = [];
let screens = document.querySelectorAll("section[data-screen]");

sideBtn.forEach(element => {
    element.addEventListener('click', (e)=> {

    sideBtn.forEach(btn => btn.classList.remove('is-active'))
    element.classList.add('is-active')

    screens.forEach(screen => screen.classList.toggle('is-visible', screen.dataset.screen === element.dataset.screen))
    })   
})
let myform = document.getElementsByTagName("form")[0] ;
console.log(myform)
myform.addEventListener("submit" , (e)=> {
e.preventDefault();
let eventtitle = document.getElementById("event-title").value;
console.log(eventtitle);
let ImageURL = document.getElementById("event-image").value;
console.log(ImageURL);
let eventdescription = document.getElementById("event-description").value;
console.log(eventdescription);
let eventseats = document.getElementById("event-seats").value;
console.log(eventseats);
let eventprice = document.getElementById("event-price").value;
console.log(eventprice);

})






    