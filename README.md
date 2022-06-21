# oldSchoolGraphics
What if HTML has not SVG, Canvas, Img...

For my stackstream event, I pretend that we don't have graphic elements in HTML. Like in 1970/1980 computers. 
We detect a way to do graphics anyhow! With pure html and vanilla JavaScript and how we solved these issues in the
stone age.

_Part 1 (2022-06-21 18:30-19:30 cest):_

- implement a canvas element (but not with <canvas>!)
- make addressable pixels on this element
- let's plot a pixel in a specified color

So, now we should be nice to JavaScript and a possible user.
  
- put this to a reusable JavaScript class with properties and methods
- implement new MyDisplay(dom-selector, x-width, y-width)
- implement setPixel(x-coord, y-coord, color)
- implement drawCircle(x-middlepoint, y-middlepoint, radius, color)
  
_Part 2 (following)_
