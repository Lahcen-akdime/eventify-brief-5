let sideBtn = document.querySelectorAll(".sidebar__btn");


sideBtn.forEach(element => {
    element.addEventListener('click', (e)=> {
           sideBtn.forEach(btn => btn.classList.remove('is-active'))
            element.classList.add('is-active')
    })
}
)




// if(element.dataset.screen === Selection.datacet.screen)