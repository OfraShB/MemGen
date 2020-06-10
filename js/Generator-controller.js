'use strict'






//canvas controller:
function renderCanvas(id) {
    // var shownImg = gImgs[id-1]

    // console.log(gImgs)
    var image = document.getElementById(id);
    // gCanvas.width = img.width;
    // gCanvas.height = img.height;

    gCtx.drawImage(image, 0, 0);
    // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var mo = document.querySelector('.modal')
    mo.style.display = 'block'

}

function onClosePic() {
    var mod = document.querySelector('.modal')
    mod.style.display = 'none'
}


function write(inputTextId, inputTextName) {

    console.log(inputTextId, inputTextName)

    var elInpText = document.getElementById(inputTextId)
    var txt = elInpText.value

    console.log(elInpText.value)

    // rray1.forEach(element => console.log(element));
    gMeme.lines.forEach((line, index) => {

        gCtx.lineWidth = '2';
        // gCtx.strokeStyle = 'red';
        // gCtx.fillStyle = 'green';
        gCtx.font = '40px sans-serif';
        gCtx.textAlign = 'center';
        var diff = 0
        ////1
        if(inputTextName==index+1)line.txt=txt
        if (index === 1) diff = 280
        var textTuWrite = (!line.txt) ? '' : line.txt
        gCtx.fillText(textTuWrite, 200, 70 + diff);
        gCtx.strokeText(textTuWrite, 200, 70 + diff);
    

    })


}
function writeOnCanvas(inputTextId, inpuTextName) {


    renderCanvas(gMeme.selectedImgId)
    gMeme.selectedLineIdx = inputTextId
    write(inputTextId, inpuTextName)
}
