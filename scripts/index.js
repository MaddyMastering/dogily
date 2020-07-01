function sidemenuopen() {
    document.querySelector('body').classList.add('no-overflow');
    document.getElementById('aside').classList.add('open');
    document.querySelector('.overlay').classList.add('show');
}

function sidemenuclose() {
    document.querySelector('body').classList.remove('no-overflow');
    document.getElementById('aside').classList.remove('open');
    document.querySelector('.overlay').classList.remove('show');
}

function openreviewmodal() {
    document.querySelector('body').classList.add('no-overflow');
    document.querySelector('.overlay').classList.add('show');
    document.querySelector('.modal').classList.add('open');
}

function closereviewmodal() {
    document.querySelector('body').classList.remove('no-overflow');
    document.querySelector('.overlay').classList.remove('show');
    document.querySelector('.modal').classList.remove('open');
}

function showimagemodal() {
    document.querySelector('body').classList.add('no-overflow');
    document.querySelector('.overlay').classList.add('show');

    const modal = document.querySelector('.image-modal');
    modal.classList.add('open');

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('image-modal')) {
            document.querySelector('body').classList.remove('no-overflow');
            document.querySelector('.overlay').classList.remove('show');
            modal.classList.remove('open');
        }
    });
}

function showpetcreatemodal() {
    document.querySelector('body').classList.remove('no-overflow');
    document.querySelector('.overlay').classList.remove('show');
    document.querySelector('.modal').classList.remove('open');
}

function openlogin() {
    document.querySelector('body').classList.add('no-overflow');
    document.querySelector('.overlay').classList.add('show');
    document.querySelector('.login-modal').classList.add('open');
    document.querySelector('#register').style.display = 'none';
}

function showlogin() {
    document.querySelector('#login').style.display = 'block';
    document.querySelector('#register').style.display = 'none';
}

function showregister() {
    document.querySelector('#login').style.display = 'none';
    document.querySelector('#register').style.display = 'block';
}

function closelogin() {
    document.querySelector('body').classList.remove('no-overflow');
    document.querySelector('.overlay').classList.remove('show');
    document.querySelector('.login-modal').classList.remove('open');
}

function openfilters() {
    document.querySelector('body').classList.add('no-overflow');
    document.querySelector('.overlay').classList.add('show');
    document.querySelector('.filter-sidebar').classList.add('open');
}

function closefilters() {
    document.querySelector('body').classList.remove('no-overflow');
    document.querySelector('.overlay').classList.remove('show');
    document.querySelector('.filter-sidebar').classList.remove('open');
}

function openme(obj) {
    document.querySelector(obj).classList.toggle('open');
}


function checkout() {
    document.location.href = './delivery.html';
}

function viewPet() {
    document.location.href = './profile-pet-food.html';
}

function compare() {
    document.location.href = './breed-compare-search.html';
}

function compareResult() {
    document.location.href = './breed-result.html'
}

function toggleChat() {
    document.querySelector('.float-chat-icon').classList.toggle('open');
}

function initCarousel() {
    const carousel = new Glider(document.querySelector("#carousel-content"), {
        slidesToShow: 1,
        dots: '#dots',
        draggable: false,
    });

    gsap.to('.carousel-quote', { duration: 1, x: 10, opacity: 1, ease: "power4.out", delay: 2 });
}

function initLazyLoad() {
    const lazy = new LazyLoad({
        elements_selector: ".lazy"
    });
}

function goToDescription() {
    window.location.href = './breed-description.html'
}

function toggleDarkmode() {
    const mode = document.querySelector('body').getAttribute('data-mode');
    if (mode === 'light') {
        document.querySelector('body').setAttribute('data-mode', 'dark');
        document.querySelector("#lightmode").style.display = "none";
        document.querySelector("#darkmode").style.display = "block";
    } else {
        document.querySelector('body').setAttribute('data-mode', 'light');
        document.getElementById("lightmode").style.display = "block";
        document.getElementById("darkmode").style.display = "none";

        console.log(document.getElementById("darkmode"));
    }
}

window.onload = () => {
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {

        setTimeout(() => {
            document.querySelector('body').classList.add('no-overflow');
            document.querySelector('.loading-screen').classList.add('hide');
        }, 1000);

        setTimeout(() => {
            document.querySelector('body').classList.remove('no-overflow');
            document.querySelector('.loading-screen').classList.add('close');
        }, 1500);

        initCarousel();
    }

    initLazyLoad();

    toggleDarkmode();
};
