
'use strict'


function onInit() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    createImgs()
    renderImgContainer()

 
    // var elmod = document.getElementById('myModal');
    
    // elmod.addEventListener('click', function scr(ev) {
        
    //     setTimeout(function(){ 
            
    //         clearCanvas(gMeme.lines[0].xpos,gMeme.lines[0].ypos)
    //         clearCanvas(gMeme.lines[1].xpos,gMeme.lines[0].ypos)
    //         renderCanvas(gMeme.selectedImgId)
            
    //         write(gMeme.lines[0].xpos,gMeme.lines[0].ypos,false)
    //         write(gMeme.lines[0].xpos,gMeme.lines[1].ypos,false)
    //     }, 3000);
    //     return

    //          })
    }

function renderImgContainer() {
            var imgs = getImgs()

            var strHtmls = imgs.map(function (img) {
                // console.log(`${img.id}`)
                return `
        <img class="mempic ${img.id}" id =${img.id} src="img/${img.id}.jpg" onclick="loadMemToCanavas(${img.id})">
            `
            })
            // console.log(strHtmls)
            document.querySelector('.pics-container').innerHTML = strHtmls.join('')
            document.querySelector('.btn-next').hidden = !hasNext()
            createImgs();
        }

function onNextPage() {
            nextPage();
            renderImgContainer();
        }


function reloadList() {
            var elLbl = document.getElementById("lblslct");
            var labelSearched = elLbl.value


            console.log(getImgs())
            var newImgs = getImgs().filter(img => img.keywords.some(kw => kw === labelSearched));
            // var newImgs = getImgs().filter(img => img.keywords.some(kw => console.log(kw)));
            loadImgs(newImgs)
            renderImgContainer()

            // var searchedImgs = 
        }



//load to canavas
function loadMemToCanavas(id) {
            renderCanvas(id)

            // loadImageFromInput(ev, renderCanvas)
            gMeme.selectedImgId = id

        }













// //canvas controller:
// function renderCanvas(id) {
//     // var shownImg = gImgs[id-1]

//     // console.log(gImgs)
//     var image  = document.getElementById(id);
//     // gCanvas.width = img.width;
//     // gCanvas.height = img.height;

//     gCtx.drawImage(image, 0, 0);
//     // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//     var mo = document.querySelector('.modal')
//     mo.style.display= 'block'
// }

// function onClosePic(){
//     var mod = document.querySelector('.modal')
//     mod.style.display='none'
// }


// function writeOn() {

//     renderCanvas(gMeme.selectedImgId)

//     var elInpText = document.getElementById("text1")
//     var txt = elInpText.value

//     console.log(txt)



//     gCtx.lineWidth = '2';
//     // gCtx.strokeStyle = 'red';
//     // gCtx.fillStyle = 'green';
//     gCtx.font = '40px sans-serif';
//     gCtx.textAlign = 'center';
//     gCtx.fillText(txt, 200, 70);
//     gCtx.strokeText(txt, 200, 70);

// }