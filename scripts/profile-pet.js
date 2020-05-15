function openhistory() {
    const historyContent = document.querySelector('.history');
    const informationContent = document.querySelector('.information');
    historyContent.classList.add('open');
    informationContent.classList.add('close');
}

function closehistory() {
    const historyContent = document.querySelector('.history');
    const informationContent = document.querySelector('.information');
    historyContent.classList.remove('open');
    informationContent.classList.remove('close');
}