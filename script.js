function toggleClass() {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
}
// toggle button
let btn = document.querySelector('.switch-btn');
btn.addEventListener('click' , toggleClass);