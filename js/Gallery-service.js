'use strict'

const KEY = 'imgs';
var gPageIdx = 0;
const PAGE_SIZE = 8;

var gKeywords = { 'nice': 12, 'cute': 1 }

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['happy', 'rich'] },
{ id: 2, url: 'img/2.jpg', keywords: ['cute', 'nice'] },
{ id: 3, url: 'img/3.jpg', keywords: ['cute', 'nice', 'sleepy', 'happy'] },];

var gWordsStok = ['nice', 'cute', 'happy', 'sleepy', 'rich']


function getImgs() {
    var startIdx = gPageIdx * PAGE_SIZE;
    return gImgs.slice(startIdx, startIdx + PAGE_SIZE)
}

function _createImg(id) {

    // console.log('v',gWordsStok[getRandomIntInclusive(1,5)])

    return {
        id: id,
        url: `img/${id}.jpg`,
        keywords: [gWordsStok[getRandomIntInclusive(1, 5)], gWordsStok[getRandomIntInclusive(1, 5)]]

    }

}


function hasNext() {
    return (gPageIdx + 1) * PAGE_SIZE < gImgs.length
}

function nextPage() {
    gPageIdx++;
    // if (gPageIdx * PAGE_SIZE >= gCars.length) gPageIdx = 0;
}



function createImgs() {
    //later
    var imgs = loadFromStorage(KEY)
    if (!imgs || !imgs.length) {
        imgs = []
        for (let i = 0; i < 8; i++) {

            imgs.push(_createImg(i + 1))
        }
    }
    gImgs = imgs;

    //for now:
    // return gImgs
    _saveImgsToStorage();
}

function loadImgs(newImgs) {
    gImgs = newImgs
}


function _saveImgsToStorage() {
    saveToStorage(KEY, gImgs)
}