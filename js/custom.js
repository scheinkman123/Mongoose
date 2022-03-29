let closeBtn = document.querySelector('.closeBtn');
let menu = document.querySelector('.menu');
let menuControll = document.querySelector('.menuControll');

menu.addEventListener('click', function (e) {
    menuControll.style.width = '80%';
})

closeBtn.addEventListener('click', function (e) {
    menuControll.style.width = '0';
})

const loadingGif = document.querySelector('.loadingGif')
const loadingImg = document.querySelector('.loadingImg');
let loginBtn = document.querySelector('.loginBtn');


let showAlert = () => {
    setTimeout(() => {
        loadingGif.style.display = 'none';
        alert('Login Successfull ..!')
    }, 2000)
}


loginBtn.addEventListener('click', function (e) {
    loadingGif.style.display = 'block';
    showAlert()
});

