# Canvas
Some tasks, such as drawing a line between arbitrary points, are extremely awkward to do with regular HTML elements.

There are **two alternatives**. 

The **first** is DOM-based but itilizes Scalable Vector Graphics (SVG), rather than HTML. Think of SVG as a document-markup dialect that focuses on shapes rather than text. You can embed an SVG document directly in an HTML document or include it with an **<img>** tag. 

The **second** alternative is called a canvas. A canvas is a **single DOM element** that encapsulates a picture. It provides a programming interface for drawing shapes onto the space taken up by the node. 

The main difference between a canvas and an SVG picture is that in SVG the original description of the shapes is preserved so that they can be moved or resized at any time.
A **canvas**, on the other hand, **converts the shapes to pixels** as soon as they are drawn and does not remember what these pixels represent. The only way to move a shape on a canvas is to clear the canvas (or the part of the canvas around the shape) and redraw it with the shape in a new position. 

**SVG**

```js
<p>Normal HTML here.</p>
<svg xmlns="http://www.w3.org/2000/svg">
  <circle r="50" cx="50" cy="50" fill="red"/>
  <rect x="120" y="5" width="90" height="90"
        stroke="blue" fill="none"/>
</svg>
```

The xmlns attribute changes an element (and its children) to a different **XML namespace**. This namespace, identified by a URL, specifies the dialect that we are currently speaking. The <circle> and <rect> tags, which do not exist in HTML, do have a meaning in SVG—they draw shapes using the style and position specified by their attributes.
These tags create DOM elements, just like HTML tags, that scripts can interact with. For example, this changes the <circle> element to be colored cyan instead:

```js
let circle = document.querySelector("circle");
circle.setAttribute("fill", "cyan");
```

## The Canvas Element ##
Canvas graphics can be drawn onto a <canvas> element. You can give such an element width and height attributes to determine its size in pixels.

A new canvas is empty, meaning it is entirely transparent and thus shows up as empty space in the document.

The <canvas> tag is intended to allow **different styles** of drawing. To get access to an actual drawing interface, we first need to create a **context**, an object whose methods provide the drawing interface. There are currently **two** widely supported **drawing styles**: "2d" for two-dimensional graphics and "webgl" for three-dimensional graphics through the OpenGL interface.

You create a context with the getContext method on the <canvas> DOM element.

```js
<p>Before canvas.</p>
<canvas width="120" height="60"></canvas>
<p>After canvas.</p>
<script>
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");
  context.fillStyle = "red";
  context.fillRect(10, 10, 100, 50);
</script>
```

After creating the context object, the example draws a red rectangle 100 pixels wide and 50 pixels high, with its top-left corner at coordinates (10,10).
Just like in HTML (and SVG), the **coordinate system** that the canvas uses puts (0,0) at the top-left corner, and the positive y-axis goes down from there. So (10,10) is 10 pixels below and to the right of the top-left corner.

## Lines and Surfaces ##
In the canvas interface, a shape can be filled, meaning its area is given a certain color or pattern, or it can be stroked, which means a line is drawn along its edge. The same terminology is used by SVG.

The fillRect method fills a rectangle. It takes first the x- and y-coordinates of the rectangle’s top-left corner, then its width, and then its height. A similar method, strokeRect, draws the outline of a rectangle.

Neither method takes any further parameters. The color of the fill, thickness of the stroke, and so on, are not determined by an argument to the method (as you might reasonably expect) but rather **by properties of the context object**.

The fillStyle property controls the way shapes are filled. It can be set to a string that specifies a color, using the color notation used by CSS.
The strokeStyle property works similarly but determines the color used for a stroked line. The width of that line is determined by the lineWidth property, which may contain any positive number.

When no width or height attribute is specified, as in the example, a canvas element gets a **default width** of 300 pixels and **height** of 150 pixels.

## Paths ##
A path is a **sequence of lines**. The 2D canvas interface takes a peculiar approach to describing such a path. It is done entirely through **side effects**. Paths are not values that can be stored and passed around. Instead, if you want to do something with a path, you make a sequence of method calls to describe its shape.

```js
<canvas></canvas>
<script>
  let cx = document.querySelector("canvas").getContext("2d");
  cx.beginPath();
  for (let y = 10; y < 100; y += 10) {
    cx.moveTo(10, y);
    cx.lineTo(90, y);
  }
  cx.stroke();
</script>
```

Each segment created with lineTo starts at the path’s **current position**. That position is usually the end of the last segment, unless moveTo was called. In that case, the next segment would start at the position passed to moveTo.

The path needs to be **closed** (meaning its start and end are in the same position) before it can be filled. If the path is not already closed, a line is added from its end to its start, and the shape enclosed by the completed path is filled.

You could also use the closePath method to explicitly close a path by adding an actual line segment back to the path’s start. This segment *is* drawn when stroking the path.

## Curves ##
The quadraticCurveTo method draws a curve to a given point. To determine the curvature of the line, the method is given a control point as well as a destination point. Imagine this control point as *attracting* the line, giving it its curve. The line won’t go through the control point, but its direction at the start and end points will be such that a straight line in that direction would point toward the control point.

```js
<canvas></canvas>
<script>
  let cx = document.querySelector("canvas").getContext("2d");
  cx.beginPath();
  cx.moveTo(10, 90);
  // control=(60,10) goal=(90,90)
  cx.quadraticCurveTo(60, 10, 90, 90);
  cx.lineTo(60, 10);
  cx.closePath();
  cx.stroke();
</script>
```

The bezierCurveTo method draws a similar kind of curve. Instead of a single control point, this one has two—one for each of the line’s endpoints.

```js
<canvas></canvas>
<script>
  let cx = document.querySelector("canvas").getContext("2d");
  cx.beginPath();
  cx.moveTo(10, 90);
  // control1=(10,10) control2=(90,10) goal=(50,90)
  cx.bezierCurveTo(10, 10, 90, 10, 50, 90);
  cx.lineTo(90, 10);
  cx.lineTo(10, 10);
  cx.closePath();
  cx.stroke();
</script>
```

The arc method is a way to draw a line that curves along the edge of a circle. It takes a pair of coordinates for the arc’s center, a radius, and then a start angle and end angle.

Those last two parameters make it possible to draw only part of the circle. The **angles are measured in radians**, not degrees.
The angle starts counting at the point to the right of the circle’s center and goes clockwise from there. You can use a start of 0 and an end bigger than 2π (say, 7) to draw a full circle.

```js
<canvas></canvas>
<script>
  let cx = document.querySelector("canvas").getContext("2d");
  cx.beginPath();
  // center=(50,50) radius=40 angle=0 to 7
  cx.arc(50, 50, 40, 0, 7);
  cx.stroke();

  cx.beginPath();
  // center=(150,50) radius=40 angle=0 to ½π
  cx.arc(150, 50, 40, 0, 0.5 * Math.PI);
  cx.stroke();
</script>
```

## Drawing a Pie Chart ##
You can draw a pie chart using arcs.

```js
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

const results = [
  { name: "Satisfied", count: 1043, color: "lightblue" },
  { name: "Neutral", count: 563, color: "lightgreen" },
  { name: "Unsatisfied", count: 510, color: "pink" },
  { name: "No comment", count: 175, color: "silver" }
];

const total = results.reduce((sum, {count}) => sum + count, 0);

let currentAngle = -0.5 * Math.PI;

results.forEach((result) => {
  let sliceAngle = (result.count / total) * 2 * Math.PI;

  context.beginPath();
  context.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);

  currentAngle += sliceAngle;

  context.lineTo(100, 100);
  context.fillStyle = result.color;
  context.fill();
});
```

## Text ##
A 2D canvas drawing context provides the methods fillText and strokeText. The latter can be useful for outlining letters, but usually fillText is what you need. It will fill the outline of the given text with the current fillStyle.

```js
<canvas></canvas>
<script>
  let cx = document.querySelector("canvas").getContext("2d");
  cx.font = "28px Georgia";
  cx.fillStyle = "fuchsia";
  cx.fillText("I can draw text, too!", 10, 50);
</script>
```

The last two arguments to fillText and strokeText provide the position at which the font is drawn. By default, they indicate the position of the start of the text’s alphabetic baseline, which is the line that letters “stand” on, not counting hanging parts in letters such as *j* or *p*. You can change the horizontal position by setting the textAlign property to "end" or "center" and the vertical position by setting textBaseline to "top", "middle", or "bottom".

## Images ##
In computer graphics, a distinction is often made between vector graphics and bitmap graphics. The first is what we have been doing so far in this chapter—specifying a picture by giving a logical description of shapes. Bitmap graphics, on the other hand, don’t specify actual shapes but rather work with pixel data (rasters of colored dots).

The drawImage method allows us to draw pixel data onto a canvas. This pixel data can originate from an <img> element or from another canvas. But it cannot immediately start drawing from this picture because the browser may not have loaded it yet. To deal with this, we register a "load" event handler and do the drawing after the image has loaded.

```js
<canvas></canvas>
<script>
  let cx = document.querySelector("canvas").getContext("2d");
  let img = document.createElement("img");
  img.src = "img/hat.png";
  img.addEventListener("load", () => {
    for (let x = 10; x < 200; x += 30) {
      cx.drawImage(img, x, 10);
    }
  });
</script>
```

By default, drawImage will draw the image at its original size. You can also give it **two additional arguments** to set a different width and height.

When drawImage is given **nine arguments**, it can be used to draw only a fragment of an image. The second through fifth arguments indicate the rectangle (x, y, width, and height) in the source image that should be copied, and the sixth to ninth arguments give the rectangle (on the canvas) into which it should be copied.

This can be used to pack multiple *sprites* (image elements) into a single image file and then draw only the part you need.

To animate a picture on a canvas, the clearRect method is useful. It resembles fillRect, but instead of coloring the rectangle, it makes it transparent, removing the previously drawn pixels.

## Transformation ##
Calling the scale method will cause anything drawn after it to be scaled. This method takes two parameters, one to set a horizontal scale and one to set a vertical scale.

**Scaling by a negative amount** will **flip** the picture around. The flipping happens around point (0,0), which means it will also flip the direction of the coordinate system. When a horizontal scaling of -1 is applied, a shape drawn at x position 100 will end up at what used to be position -100.

You can rotate subsequently drawn shapes with the rotate method and move them with the translate method. The interesting—and confusing—thing is that these transformations **stack**, meaning that each one happens relative to the previous transformations.

## Storing and clearing transformations ##
The save and restore methods on the 2D canvas context do this transformation management. They conceptually keep a stack of transformation states. When you call save, the current state is pushed onto the stack, and when you call restore, the state on top of the stack is taken off and used as the context’s current transformation. You can also call resetTransform to fully reset the transformation.

## Choosing a Graphics Interface ##
Both SVG and HTML build up a **data structure (the DOM)** that represents your picture. This makes it possible to modify elements after they are drawn. If you need to repeatedly change a small part of a big picture in response to what the user is doing or as part of an animation, doing it in a canvas can be needlessly expensive. The DOM also allows us to register mouse event handlers on every element in the picture (even on shapes drawn with SVG). You can’t do that with canvas.

But canvas’s pixel-oriented approach can be an advantage when drawing a huge number of tiny elements. The fact that it **does not build** up a data structure but only repeatedly draws onto the same pixel surface gives canvas a lower cost per shape.