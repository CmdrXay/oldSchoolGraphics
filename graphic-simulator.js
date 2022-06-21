function MyDisplay(selector, maxX, maxY) {

    this.selector = selector;
    this.maxX = maxX;
    this.maxY = maxY;

    this.pixelWidth = 3;
    this.ok = true;
    this.error = !this.ok;
    this.errorMessage = '';
    this.errorStack = [];

    $pixelArea = document.querySelector(selector);
    $pixelArea.style['font-size'] = this.pixelWidth + 'px';
  
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
    $pixelArea.style['width'] = this.pixelWidth * maxX + 'px';
    $pixelArea.style['max-width'] = this.pixelWidth * maxX + 'px';
    $pixelArea.style['height'] = this.pixelWidth * maxY + 'px';
    $pixelArea.style['max-height'] = this.pixelWidth * maxY + 'px';
    $pixelArea.querySelector('.line').style['height'] = this.pixelWidth + 'px';
    $pixelArea.querySelector('.line').style['max-height'] = this.pixelWidth * maxY + 'px';

    this.setPixel = function(x, y, color) {
        x = parseInt(x);
        y = parseInt(y);
        if ( x >= this.maxX || y >= this.maxY ) {
            this.errorMessage = 'out of boundary - x has to be max ' + this.maxX + ' and y has to be max ' + this.maxY;
            this.errorStack.push(this.errorMessage);
            this.ok = false;
        } else {
            this.ok = true;
        }

        if (this.ok) {
            $pixel = $pixelArea.querySelector('#x' + x + 'y' + y);
            $pixel.style['background-color'] = color;
        } else {
            this.error = true;
        }

        return this.ok;
    }

    this.drawCircle = function(x, y, radius, color) {
        for (let winkel = 0; winkel < 360; winkel++) {
            let xc = Math.sin(winkel / 360 * Math.PI * 2) * radius + x;
            let yc = Math.cos(winkel / 360 * Math.PI * 2) * radius + y;
            this.setPixel(xc, yc, color);
        }
    }

    this.getError = function() {
        return this.error;
    }

    this.getErrorStack = function() {
        return this.errorStack;
    }
}

bild = new MyDisplay('#canvas', 100, 100);
bild.setPixel(20, 20, 'blue');
bild.drawCircle(50, 50, 20, 'red');