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

    document.querySelector('.glider').addEventListener('glider-slide-visible', (event) => {
        var myArray = ['#F5BAD0', '#A2E159', '#333', '#2185D0'];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        document.querySelector(".carousel").style.backgroundColor = rand;
    });
};