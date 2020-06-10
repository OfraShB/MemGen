'use strict'

var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['happy', 'rich'] },
{ id: 2, url: 'img/2.jpg', keywords: ['cute', 'nice'] },
{ id: 3, url: 'img/3.jpg', keywords: ['cute', 'nice', 'sleepy','happy'] },];
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,

    //later
    lines: [
        {
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}
