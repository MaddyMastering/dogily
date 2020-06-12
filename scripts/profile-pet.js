function openhistory() {
    const historyContent = document.querySelector('.history');
    historyContent.classList.add('open');
    document.getElementById('notify-content').classList.add('close');
}

function closehistory() {
    const historyContent = document.querySelector('.history');
    historyContent.classList.remove('open');
    document.getElementById('notify-content').classList.remove('close');
}

function showvaccinationcontent() {
    document.getElementById('highlightme').classList.add('active');
    document.getElementById('notify-content').classList.add('close');
    document.getElementById('info-content').classList.remove('close');

    if (window.innerWidth < 480) {
        document.querySelector('.history').classList.remove('open');
    }
}

function closevaccinationcontent() {
    document.getElementById('highlightme').classList.remove('active');
    document.getElementById('info-content').classList.add('close');
    document.getElementById('notify-content').classList.remove('close');

    if (window.innerWidth < 480) {
        document.querySelector('.history').classList.add('open');
        document.getElementById('notify-content').classList.add('close');
    }
}

function closeservices() {
    document.getElementById('highlightme').classList.remove('active');
    document.getElementById('info-content').classList.add('close');
    document.querySelector('.history').classList.add('service-history');
}

function showservicecontent() {
    document.getElementById('highlightme').classList.add('active');
    document.querySelector('.history').classList.remove('service-history');
    document.getElementById('info-content').classList.remove('close');
}

function showpetsnavbar() {
    document.querySelector('.pet-profile-nav').classList.toggle('open');
}