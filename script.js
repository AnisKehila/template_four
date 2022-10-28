function toggleClass() {
    this.classList.toggle('active');
}
function closeSideBar(sideBar) {
    sideBar.style = `
        margin-left: -13%; 
    `;
}
function showSideBar(sideBar) {
    sideBar.style = `margin-left: 0;`;

}
// toggle button
let toggleBtns = document.querySelectorAll('.switch-btn');
toggleBtns.forEach(e => {
    e.addEventListener('click' , toggleClass);
})

// close side bar in mobile if scrolled 
let sideBar = document.getElementById('side-bar');
let closeOnY = document.getElementById('close-side-bar').offsetTop + 100;
let body = document.body;
window.addEventListener('scroll' , (e) => {
    if(this.scrollY > closeOnY && this.innerWidth < 768) {
        closeSideBar(sideBar);
    } else {
        showSideBar(sideBar);
    }
} 
);