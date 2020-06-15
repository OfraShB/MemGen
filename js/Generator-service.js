
'use strict'

var gCanvas;
var gCtx;

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,

    lines: [
        {
            txt: '',
            size: 40,
            align: 'center',
            color: 'green',
            fontfam: 'Impact',
            xpos: 200,
            ypos: 70
        },
        {
            txt: '',
            size: 40,
            align: 'center',
            color: 'blue',
            fontfam: 'Impact',
            xpos: 200,
            ypos: 350

        }
    ]
}



/////////////////////////////////////


function getMeme() {
    return gMeme
}


function updateMeme(keyToUpdate, value, lineKey) {



    switch (keyToUpdate) {
        case 'lines':

            getMeme().lines.forEach(line => {

                switch (lineKey) {

                    case 'color':
                    case 'fontfam':
                    case 'size':
                    case 'align':
                    case 'txt':

                        console.log('l ',lineKey,' v ',line[lineKey] )

                        line[lineKey] = value

                        console.log('a ', getMeme())
                        break;


                    case '_size':
                    case 'ypos':


                        var helpkey = (lineKey === '_size') ? 'size' : lineKey


                        line[helpkey] = line[helpkey] + value

                        break;
                }

            });

            break;
        default:
            
            getMeme()[keyToUpdate] = value
           

    }

}

function switchLines() {
    var repTxt = gMeme.lines[0].txt
    gMeme.lines[0].txt = gMeme.lines[1].txt
    gMeme.lines[1].txt = repTxt
}


// function writeOnCanvas(inputTextId, inpuTextName, isReplaced) {

//     renderCanvas(gMeme.selectedImgId)
//     gMeme.selectedLineIdx = inputTextId
//     write(inputTextId, inpuTextName, isReplaced)
// }


// function setTextSize(unit, elName) {

//     gMeme.lines[0].size = gMeme.lines[0].size + unit
//     gMeme.lines[1].size = gMeme.lines[1].size + unit
//     writeOnCanvas('text1', '1', false)
//     writeOnCanvas('text2', '2', false)

// }


// function setTextLocation(unit) {

//     gMeme.lines[0].ypos = gMeme.lines[0].ypos + unit
//     writeOnCanvas('text1', '1', false)

// }

// function switcLines() {

//     console.log(gMeme.lines[0].txt, ' ', gMeme.lines[1].txt)

//     var repTxt = gMeme.lines[0].txt
//     gMeme.lines[0].txt = gMeme.lines[1].txt
//     gMeme.lines[1].txt = repTxt

//     console.log(gMeme.lines[0].txt, ' ', gMeme.lines[1].txt)

//     writeOnCanvas('text1', '1', true)
//     writeOnCanvas('text2', '2', true)

// }

// function changeTxtColor() {

//     var elColor = document.getElementById("chosecolor");
//     var _color = elColor.value
//     gMeme.lines[0].color = _color
//     gMeme.lines[1].color = _color
//     writeOnCanvas('text1', '1', false)
//     writeOnCanvas('text2', '2', false)

// }


// function changeTxtFontFam() {
//     var elFfam = document.getElementById("fontfam");
//     var _ffam = elFfam.value

//     gMeme.lines[0].fontfam = _ffam
//     gMeme.lines[1].fontfam = _ffam
//     writeOnCanvas('text1', '1', false)
//     writeOnCanvas('text2', '2', false)

// }

// function changTxtSize() {
//     var elTsize = document.getElementById("fsize");
//     var _tsize = elTsize.value

//     gMeme.lines[0].size = _tsize
//     gMeme.lines[1].size = _tsize
//     writeOnCanvas('text1', '1', false)
//     writeOnCanvas('text2', '2', false)

// }

// function setalig(alig) {

//     gMeme.lines[0].align = alig
//     gMeme.lines[1].align = alig
//     writeOnCanvas('text1', '1', false)
//     writeOnCanvas('text2', '2', false)

// }

// function clearTxt() {

//     gMeme.lines[0].txt = ''
//     gMeme.lines[1].txt = ''
//     writeOnCanvas('text1', '1', true)
//     writeOnCanvas('text2', '2', true)
// }



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






/////////////////////////////////////













