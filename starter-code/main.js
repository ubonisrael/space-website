//get navigation toggle button
const navToggle = document.querySelector('#navToggle-btn')
//get navigation container
const navlist = document.querySelector('.navlist')

//add function that toggles the nsv menu
navToggle.addEventListener('click', () => {
    navlist.classList.toggle('showbar')
    navToggle.classList.toggle('close-nav')
    if (navToggle.ariaExpanded == "true") {
        navToggle.ariaExpanded = "false"
        return
    } 
    if (navToggle.ariaExpanded == "false") {
        navToggle.ariaExpanded = "true"
        return
    } 
})