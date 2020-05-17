function sidemenuopen() {
    document.getElementById('aside').classList.add('open');
}

function sidemenuclose() {
    document.getElementById('aside').classList.remove('open');
}

window.onload = () => {
    const carousel = new Glider(document.querySelector("#carousel-content"), {
        slidesToShow: 1,
        dots: '#dots',
        draggable: true,
    });
};