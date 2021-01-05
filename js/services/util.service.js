export const utilService = {
    storeToStorage,
    loadFromStorage,
    makeId,
    makeLorem,
    getRandomPrice,
    getRandomSale,
    getRandomCurrency,
    toggleNavMail,
}

function storeToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
function makeLorem(size = 10) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}
function getRandomSale(){
    const randomBolen = [true,false,true,false,true,false,false]
    const randomNum = getRandomInt(0, 6)
    return randomBolen[randomNum]
}
function getRandomCurrency(){
    const randomCurr = ['ILS','EUR','USD']
    const randomNum = getRandomInt(0, 2)
    return randomCurr[randomNum]
}
function getRandomPrice(){
    const randomCurr = [100,200,300,50,60,90,150,89,79]
     const randomNum = getRandomInt(0, 8)
    return randomCurr[randomNum]
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function toggleNavMail(){
    const navBarMail = document.querySelector('.nav-bar-email');
    navBarMail.classList.toggle('open-nav')
}