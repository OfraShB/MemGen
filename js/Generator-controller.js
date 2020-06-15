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


    var elInpText = document.getElementById(inputTextId)
    var txt = elInpText.value
    // console.log(txt)

    gMeme.lines.forEach((line, index) => {

        gCtx.lineWidth = '2';
        gCtx.strokeStyle = line.color;

        gCtx.font = line.size + 'px ' + line.fontfam;
        gCtx.textAlign = line.align;
    

        if (inputTextName == index + 1 && !isReplaced) {
            line.txt = txt
            
        }
        
        var textToWrite = (!line.txt) ? '' : line.txt


        gCtx.fillText(textToWrite, line.xpos, line.ypos);
        gCtx.strokeText(textToWrite, line.xpos, line.ypos);

    })

}


//////////////////////////////////////////////////////////////////////

function onWriteOnCanvas(inputTextId, inpuTextName, isReplaced){
  
    renderCanvas(getMeme().selectedImgId)

    updateMeme('selectedLineIdx',inputTextId)

    write(inputTextId, inpuTextName, isReplaced)

}

function onSetTextSize(unit, elName) {

    updateMeme('lines',unit,'_size')

    getMeme().lines.forEach((line,index) => {

        var ind = index+1
        var txt = 'text'+ind
       
        onWriteOnCanvas(txt.trim(), index+1, false)

    });

}

function onSetTextLocation(unit) {

    updateMeme('lines',unit,'ypos')

    onWriteOnCanvas('text1', '1', false)
}


function onSwitcLines() {

    switchLines()

    getMeme().lines.forEach((line,index) => {

        var ind = index+1
        var txt = 'text'+ind
       
        onWriteOnCanvas(txt.trim(), index+1, true)

    });

}

function onChangeTxtColor() {

    var elColor = document.getElementById("chosecolor");
    var _color = elColor.value

    updateMeme('lines',_color,'color')

    getMeme().lines.forEach((line,index) => {

        var ind = index+1
        var txt = 'text'+ind
       
        onWriteOnCanvas(txt.trim(), index+1, false)

    });

}


function onChangeTxtFontFam() {
    var elFfam = document.getElementById("fontfam");
    var _ffam = elFfam.value

    updateMeme('lines',_ffam,'fontfam')

    getMeme().lines.forEach((line,index) => {

        var ind = index+1
        var txt = 'text'+ind
       
        onWriteOnCanvas(txt.trim(), index+1, false)

    });

}

function onChangTxtSize() {

    var elTsize = document.getElementById("fsize");
    var _tsize = elTsize.value

    updateMeme('lines',_tsize,'size')


    getMeme().lines.forEach((line,index) => {

        var ind = index+1
        var txt = 'text'+ind
       
        onWriteOnCanvas(txt.trim(), index+1, false)

    });
    
}

function onSetAlig(alig) {

    // gMeme.lines[0].align = alig
    // gMeme.lines[1].align = alig


    updateMeme('lines',alig,'align')

    
    getMeme().lines.forEach((line,index) => {

        var ind = index+1
        var txt = 'text'+ind
       
        onWriteOnCanvas(txt.trim(), index+1, false)

    });
    // onWriteOnCanvas('text1', '1', false)
    // onWriteOnCanvas('text2', '2', false)
    // writeOnCanvas('text1', '1', false)
    // writeOnCanvas('text2', '2', false)

}

// function onClearTxt() {

//     updateMeme('lines','','txt')


//     getMeme().lines.forEach((line,index) => {

//         var ind = index+1
//         var txt = 'text'+ind
       
//         onWriteOnCanvas(txt.trim(), index+1, false)


//     });

// }

function onClearTxt() {

    gMeme.lines[0].txt = ''
    gMeme.lines[1].txt = ''
    
        getMeme().lines.forEach((line,index) => {

        var ind = index+1
        var txt = 'text'+ind
       
        onWriteOnCanvas(txt.trim(), index+1, false)


    });
    // writeOnCanvas('text1', '1', true)
    // writeOnCanvas('text2', '2', true)
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
