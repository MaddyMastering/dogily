function sidemenuopen() {
    document.getElementById('aside').classList.add('open');
    document.querySelector('.overlay').classList.add('show');
}

function sidemenuclose() {
    document.getElementById('aside').classList.remove('open');
    document.querySelector('.overlay').classList.remove('show');
}

function viewPet() {
    document.location.href = './profile-pet.html'
}

function compare() {
    document.location.href = './breed-compare-search.html'
}

function compareResult() {
    document.location.href = './breed-result.html'
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

window.onload = () => {
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {

        setTimeout(() => {
            document.querySelector('.loading-screen').classList.add('hide');
        }, 1000);

        setTimeout(() => {
            document.querySelector('.loading-screen').classList.add('close');
        }, 1500);

        initCarousel();
    }

    initLazyLoad();
};
