function MyDisplay(selector, maxX, maxY) {

    this.selector = selector;

    this.pixelWidth = 3;

    $pixelArea = document.querySelector('#canvas');
    $pixelArea.setAttribute('style', 'font-size: 3px');
  
    let line = '';
    let canvas = '';
    for (let y = 0; y < maxY; y++ ) {
        line = '<div class="line">';
        for (let x = 0; x < maxX; x++) {
            line += '<div style="width:' + this.pixelWidth + 'px; height: ' + this.pixelWidth + 'px;" class="pixel" id="x' + x + 'y' + y +'">&nbsp;</div>';
        }
        line += '</div>';
        canvas += line;
    }

    $pixelArea.innerHTML = canvas;

    this.setPixel = function(x, y, color) {
        x = parseInt(x);
        y = parseInt(y);
        if ( x >= this.maxX || y >= this.maxY ) {
            console.error('out of boundary - x has to be max ' + this.maxX + ' and y has to be max ' + this.maxY);
            return;
        }
        $pixel = $pixelArea.querySelector('#x' + x + 'y' + y);
        $pixel.style['background-color'] = color;
    }

    this.drawCircle = function(x, y, radius, color) {
        for (let winkel = 0; winkel < 360; winkel++) {
            let xc = Math.sin(winkel / 360 * Math.PI * 2) * radius + x;
            let yc = Math.cos(winkel / 360 * Math.PI * 2) * radius + y;
            this.setPixel(xc, yc, color);
        }
    }
}

bild = new MyDisplay('#canvas', 100, 100);
bild.setPixel(20, 20, 'blue');
bild.drawCircle(50, 50, 20, 'red');