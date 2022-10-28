function toggleClass() {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
}
// toggle button
let toggleBtns = document.querySelectorAll('.switch-btn');
toggleBtns.forEach(e => {
    e.addEventListener('click' , toggleClass);
})