'use strict'

function renderImgCotainer() {
    var imgs = getImgs()
    
    var strHtmls = cars.map(function (car) {
        return `
        <div class="car-preview">
            <img class="card-img-top" src="img/${car.vendor}.png" alt="Card image cap">
            <span class="delete-btn" onclick="onDeleteCar('${car.id}')">X</span>
            <div class="card-body">
                <h5 class="card-title">${car.vendor}</h5>
                <p class="card-text">max speed: ${car.maxSpeed}</p>
                <a href="#"  onclick="onReadCar('${car.id}')">Details</a>
                <a href="#" onclick="onUpdateCar('${car.id}')">Update</a>
            </div>
        </div> 
        `
    })
    document.querySelector('.cars-container').innerHTML = strHtmls.join('')
    document.querySelector('.btn-next').hidden = !hasNext()
}




function renderCanvas(img) {
    gCanvas.width = img.width;
    gCanvas.height = img.height;
    gCtx.drawImage(img, 0, 0);
    // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

