'use strict'

const KEY = 'imgs';
var gPageIdx = 0;
const PAGE_SIZE = 4;

var gKeywords = { 'happy': 12, 'funny puk': 1 }

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['happy', 'rich'] },
{ id: 2, url: 'img/2.jpg', keywords: ['cute', 'nice'] },
{ id: 3, url: 'img/3.jpg', keywords: ['cute', 'nice', 'sleepy','happy'] },];

// var gMeme = {
//     selectedImgId: 0,
//     selectedLineIdx: 0,

//     //later
//     lines: [
//         {
//             txt: 'I never eat Falafel',
//             size: 20,
//             align: 'left',
//             color: 'red'
//         }
//     ]
// }


function getImgs() {
    var startIdx = gPageIdx*PAGE_SIZE;
    return gImgs.slice(startIdx, startIdx + PAGE_SIZE)
}

function _createImg(id) {

    return {
        id: id,
        url: `img/${id}.jpg`,
        keywords: []       
    }
}


function hasNext() {
    return (gPageIdx+1) * PAGE_SIZE < gImgs.length
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
        for (let i = 0; i < 10; i++) {

            imgs.push(_createImg(i+1))
        }
    }
    gImgs = imgs;

    //for now:
    // return gImgs
    _saveImgsToStorage();
}


function _saveImgsToStorage() {
    saveToStorage(KEY, gImgs)
}