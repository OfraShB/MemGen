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


function write(inputTextId, inputTextName, isReplaced) {

    // console.log(inputTextId, inputTextName)

    var elInpText = document.getElementById(inputTextId)
    var txt = elInpText.value


    // gCtx.clearRect(x, y)
    // console.log(elInpText.value)

    // rray1.forEach(element => console.log(element));
    gMeme.lines.forEach((line, index) => {

        gCtx.lineWidth = '2';
        gCtx.strokeStyle = line.color;
        // gCtx.fillStyle = 'green';
        gCtx.font = line.size + 'px ' + line.fontfam;
        gCtx.textAlign = line.align;
        var diff = 0

        clearCanvas(line.xpos, line.ypos)
        if (inputTextName == index + 1 && !isReplaced) {
            line.txt = txt
            drawLine(line.xpos, line.ypos)
        }

        var textToWrite = (!line.txt) ? '' : line.txt

        
        // gCtx.fillText(textTuWrite, line.xpos, line.ypos + diff);
        // gCtx.strokeText(textTuWrite, line.xpos, line.ypos + diff);

        gCtx.fillText(textToWrite, line.xpos, line.ypos);
        gCtx.strokeText(textToWrite, line.xpos, line.ypos);


    })


}
function writeOnCanvas(inputTextId, inpuTextName, isReplaced) {


    renderCanvas(gMeme.selectedImgId)
    gMeme.selectedLineIdx = inputTextId
    write(inputTextId, inpuTextName, isReplaced)
}


function setTextSize(unit, elName) {

    gMeme.lines[0].size = gMeme.lines[0].size + unit
    gMeme.lines[1].size = gMeme.lines[1].size + unit
    writeOnCanvas('text1', '1', false)
    writeOnCanvas('text2', '2', false)

}


function setTextLocation(unit) {

    gMeme.lines[0].ypos = gMeme.lines[0].ypos + unit
    writeOnCanvas('text1', '1', false)

}

function switcLines() {

    console.log(gMeme.lines[0].txt, ' ', gMeme.lines[1].txt)

    var repTxt = gMeme.lines[0].txt
    gMeme.lines[0].txt = gMeme.lines[1].txt
    gMeme.lines[1].txt = repTxt

    console.log(gMeme.lines[0].txt, ' ', gMeme.lines[1].txt)

    writeOnCanvas('text1', '1', true)
    writeOnCanvas('text2', '2', true)

}

function changeTxtColor() {

    var elColor = document.getElementById("chosecolor");
    var _color = elColor.value
    gMeme.lines[0].color = _color
    gMeme.lines[1].color = _color
    writeOnCanvas('text1', '1', false)
    writeOnCanvas('text2', '2', false)

}


function changeTxtFontFam() {
    var elFfam = document.getElementById("fontfam");
    var _ffam = elFfam.value

    gMeme.lines[0].fontfam = _ffam
    gMeme.lines[1].fontfam = _ffam
    writeOnCanvas('text1', '1', false)
    writeOnCanvas('text2', '2', false)

}

function changTxtSize() {
    var elTsize = document.getElementById("fsize");
    var _tsize = elTsize.value

    gMeme.lines[0].size = _tsize
    gMeme.lines[1].size = _tsize
    writeOnCanvas('text1', '1', false)
    writeOnCanvas('text2', '2', false)

}

function setalig(alig) {

    gMeme.lines[0].align = alig
    gMeme.lines[1].align = alig
    writeOnCanvas('text1', '1', false)
    writeOnCanvas('text2', '2', false)

}

function clearTxt() {

    gMeme.lines[0].txt = ''
    gMeme.lines[1].txt = ''
    writeOnCanvas('text1', '1', true)
    writeOnCanvas('text2', '2', true)
}



function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}


function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader();
    
    reader.onload = function (event) {
        var img = new Image();
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result;
    }
    reader.readAsDataURL(ev.target.files[0]);
}


function drawLine(x, y, xEnd = +300, yEnd = y) {
    gCtx.beginPath()
    gCtx.moveTo(x-80, y)
    gCtx.lineTo(xEnd, yEnd)
    gCtx.closePath()
    // gCtx.strokeStyle = 'black'
    gCtx.stroke()

}
function clearCanvas(x,y) {
    gCtx.clearRect(x, y ,300, 1)
    // You may clear part of the canvas
    // gCtx.clearRect(50, 50, 200, 200);
}




//////////////////////////////////////

function drop(ev) {
    ev.preventDefault();

    var dropX = ev.clientX - canvasLeft - startOffsetX;
    var dropY = ev.clientY - canvasTop - startOffsetY;
    var id = ev.dataTransfer.getData("Text");
    var dropElement = document.getElementById(id);

    // draw the drag image at the drop coordinates
    ctx.drawImage(dropElement, dropX, dropY);
}
