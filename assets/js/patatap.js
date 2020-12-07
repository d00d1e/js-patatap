var keyData = {
  q: {
    sound: new Howl({
      src: ['./assets/sounds/bubbles.mp3'],
      html5: true
    }),
    color: '#1abc9c'
  },
  w: {
    sound: new Howl({
      src: ['./assets/sounds/clay.mp3'],
      html5: true
    }),
    color: '#2ecc71'
  },
  e: {
    sound: new Howl({
      src: ['./assets/sounds/confetti.mp3'],
      html5: true
    }),
    color: '#3498db'
  },
  r: {
    sound: new Howl({
      src: ['./assets/sounds/corona.mp3'],
      html5: true
    }),
    color: '#9b59b6'
  },
  t: {
    sound: new Howl({
      src: ['./assets/sounds/dotted-spiral.mp3'],
      html5: true
    }),
    color: '#34495e'
  },
  y: {
    sound: new Howl({
      src: ['./assets/sounds/flash-1.mp3'],
      html5: true
    }),
    color: '#16a085'
  },
  u: {
    sound: new Howl({
      src: ['./assets/sounds/flash-2.mp3'],
      html5: true
    }),
    color: '#27ae60'
  },
  i: {
    sound: new Howl({
      src: ['./assets/sounds/flash-3.mp3'],
      html5: true
    }),
    color: '#2980b9'
  },
  o: {
    sound: new Howl({
      src: ['./assets/sounds/glimmer.mp3'],
      html5: true
    }),
    color: '#8e44ad'
  },
  p: {
    sound: new Howl({
      src: ['./assets/sounds/moon.mp3'],
      html5: true
    }),
    color: '#2c3e50'
  },
  a: {
    sound: new Howl({
      src: ['./assets/sounds/pinwheel.mp3'],
      html5: true
    }),
    color: '#f1c40f'
  },
  s: {
    sound: new Howl({
      src: ['./assets/sounds/piston-1.mp3'],
      html5: true
    }),
    color: '#e67e22'
  },
  d: {
    sound: new Howl({
      src: ['./assets/sounds/piston-2.mp3'],
      html5: true
    }),
    color: '#e74c3c'
  },
  f: {
    sound: new Howl({
      src: ['./assets/sounds/prism-1.mp3'],
      html5: true
    }),
    color: '#95a5a6'
  },
  g: {
    sound: new Howl({
      src: ['./assets/sounds/prism-2.mp3'],
      html5: true
    }),
    color: '#f39c12'
  },
  h: {
    sound: new Howl({
      src: ['./assets/sounds/prism-3.mp3'],
      html5: true
    }),
    color: '#d35400'
  },
  j: {
    sound: new Howl({
      src: ['./assets/sounds/splits.mp3'],
      html5: true
    }),
    color: '#1abc9c'
  },
  k: {
    sound: new Howl({
      src: ['./assets/sounds/squiggle.mp3'],
      html5: true
    }),
    color: '#2ecc71'
  },
  l: {
    sound: new Howl({
      src: ['./assets/sounds/strike.mp3'],
      html5: true
    }),
    color: '#3498db'
  },
  z: {
    sound: new Howl({
      src: ['./assets/sounds/suspension.mp3'],
      html5: true
    }),
    color: '#9b59b6'
  },
  x: {
    sound: new Howl({
      src: ['./assets/sounds/timer.mp3'],
      html5: true
    }),
    color: '#34495e'
  },
  c: {
    sound: new Howl({
      src: ['./assets/sounds/ufo.mp3'],
      html5: true
    }),
    color: '#16a085'
  },
  v: {
    sound: new Howl({
      src: ['./assets/sounds/veil.mp3'],
      html5: true
    }),
    color: '#27ae60'
  },
  b: {
    sound: new Howl({
      src: ['./assets/sounds/wipe.mp3'],
      html5: true
    }),
    color: '#2980b9'
  },
  n: {
    sound: new Howl({
      src: ['./assets/sounds/zig-zag.mp3'],
      html5: true
    }),
    color: '#8e44ad'
  },
  m: {
    sound: new Howl({
      src: ['./assets/sounds/moon.mp3'],
      html5: true
    }),
    color: '#2c3e50'
  }
}

var circles = [];

function onKeyDown(event) {
  if(keyData[event.key]){
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;

    var newCircle = new Path.Circle(point, 500);

    newCircle.fillColor = keyData[event.key].color;
    keyData[event.key].sound.play();
    circles.push(newCircle);
  }
};

function onFrame(event){

  for(var i = 0; i < circles.length; i++){
    circles[i].fillColor.hue += 1;
    circles[i].scale(0.9);
    if(circles[i].area < 1){
      circles[i].remove(); //remove circle from canvas
      circles.splice(i, 1); // remove circle from array
       // console.log(circles)
    }
  }
};