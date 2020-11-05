// https://mappa.js.org/docs/getting-started.html

// Other possible interesting videos:
// Subscribers data: https://www.youtube.com/watch?v=Ae73YY_GAU8&feature=youtu.be
// Earthquake Data: https://www.youtube.com/watch?v=ZiYdOwOrGyc&t=1083s

// For integrating images: https://www.youtube.com/watch?v=FVYGyaxG4To

// Create a variable to hold our map
let myMap;
// Create a variable to hold our canvas
let canvas;
// Create a new Mappa instance using Leaflet
const mappa = new Mappa('Leaflet');

let pathArrayOfPointsLat = [];
let pathArrayOfPointsLon = [];

let opathArrayOfPointsLat = [];
let opathArrayOfPointsLon = [];

let oopathArrayOfPointsLat = [];
let oopathArrayOfPointsLon = [];


let ooopathArrayOfPointsLat = [];
let ooopathArrayOfPointsLon = [];

let oooopathArrayOfPointsLat = [];
let oooopathArrayOfPointsLon = [];

let positionX = [];
let positionY = [];


// These are all our map options in a single JavaScript object
// We will access these map options with the DOT notation
let options = {
  lat: 42.951160,
  lng: -78.824014,
  zoom: 18,
  style: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
}

function preload() {
  // With this code, you will need to convert your GPX file to CSV
  // Google search online converters and select one to test
  // firstPath = loadTable('track_points.csv', 'csv', 'header');

  // STEP 1: Swap out your CSV file
  firstPath = loadTable('Anna_cars_track_points.csv', 'csv', 'header');
  secondPath = loadTable('Sakeena_cars_track_points.csv', 'csv', 'header');
  thirdPath = loadTable('Xuwen_cars_track_points.csv', 'csv', 'header');
    fourthPath = loadTable('no.csv', 'csv', 'header');
    fithPath = loadTable('yes.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(1000, 1000);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myMap.onChange(clear);


  myMap.onChange(drawPath.bind(null, firstPath));
  myMap.onChange(drawooooPath.bind(null, secondPath));
myMap.onChange(drawoPath.bind(null, thirdPath));

myMap.onChange(drawooPath.bind(null, fithPath));
myMap.onChange(drawoooPath.bind(null, fourthPath));
  myMap.onChange(drawLinePath.bind(null));
myMap.onChange(odrawLinePath.bind(null));
myMap.onChange(oodrawLinePath.bind(null));
myMap.onChange(ooodrawLinePath.bind(null));
myMap.onChange(oooodrawLinePath.bind(null));

  //myMap.onChange(drawPath.bind(null, thirdPath));
}

function draw() {
  // console.log(pathArrayOfPointsLat)
  // drawLinePath();
}


// function drawPathReduce(path) {
//   for (let i = 0; i < path.getRowCount() - 1; i=i+4){
//     const latitude = Number(path.getString(i, 'reclon'));
//     const longitude = Number(path.getString(i, 'reclat'));
//     if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
//       const pos = myMap.latLngToPixel(latitude, longitude);
//       // noStroke(); // Control stroke: https://p5js.org/reference/#/p5/stroke
//       // fill(255, 255, 255, 10); // Control fill: https://p5js.org/reference/#/p5/fill
//       // pos.x and pos.y are the x & y position on the 2D screen
//       // Control the size of the circles in parameters 3 and 4 (currently they are 20)
//       // Instead of an ellipse, consider using any of the other shapes in the p5 library
//       // ellipse(pos.x, pos.y, 50, 50)
//
//       stroke('white');
//       strokeWeight(1);
//       line(pos.x, pos.y, pos.x, pos.y);
//     }
//   }
// }


function drawPath(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclon'));
    const longitude = Number(path.getString(i, 'reclat'));

    pathArrayOfPointsLat[i] = latitude;
    pathArrayOfPointsLon[i] = longitude;

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      // Step 2: Customize graphics
      // noStroke(); // Control stroke: https://p5js.org/reference/#/p5/stroke
      // fill(255, 255, 255, 10); // Control fill: https://p5js.org/reference/#/p5/fill
      // pos.x and pos.y are the x & y position on the 2D screen
      // Control the size of the circles in parameters 3 and 4 (currently they are 20)
      // Instead of an ellipse, consider using any of the other shapes in the p5 library
      // ellipse(pos.x, pos.y, 50, 50)

      stroke('white');
      strokeWeight(1);
      line(pos.x, pos.y, pos.x, pos.y);

    }
  }
}

function drawoPath(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclon'));
    const longitude = Number(path.getString(i, 'reclat'));

    opathArrayOfPointsLat[i] = latitude;
    opathArrayOfPointsLon[i] = longitude;

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      // Step 2: Customize graphics
      // noStroke(); // Control stroke: https://p5js.org/reference/#/p5/stroke
      // fill(255, 255, 255, 10); // Control fill: https://p5js.org/reference/#/p5/fill
      // pos.x and pos.y are the x & y position on the 2D screen
      // Control the size of the circles in parameters 3 and 4 (currently they are 20)
      // Instead of an ellipse, consider using any of the other shapes in the p5 library
      // ellipse(pos.x, pos.y, 50, 50)

      stroke('white');
      strokeWeight(1);
      line(pos.x, pos.y, pos.x, pos.y);

    }
  }
}

function drawooPath(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclon'));
    const longitude = Number(path.getString(i, 'reclat'));

    oopathArrayOfPointsLat[i] = latitude;
    oopathArrayOfPointsLon[i] = longitude;

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      // Step 2: Customize graphics
      // noStroke(); // Control stroke: https://p5js.org/reference/#/p5/stroke
      // fill(255, 255, 255, 10); // Control fill: https://p5js.org/reference/#/p5/fill
      // pos.x and pos.y are the x & y position on the 2D screen
      // Control the size of the circles in parameters 3 and 4 (currently they are 20)
      // Instead of an ellipse, consider using any of the other shapes in the p5 library
      // ellipse(pos.x, pos.y, 50, 50)

      stroke('white');
      strokeWeight(1);
      line(pos.x, pos.y, pos.x, pos.y);

    }
  }
}

function drawoooPath(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclon'));
    const longitude = Number(path.getString(i, 'reclat'));

    ooopathArrayOfPointsLat[i] = latitude;
    ooopathArrayOfPointsLon[i] = longitude;

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      // Step 2: Customize graphics
      // noStroke(); // Control stroke: https://p5js.org/reference/#/p5/stroke
      // fill(255, 255, 255, 10); // Control fill: https://p5js.org/reference/#/p5/fill
      // pos.x and pos.y are the x & y position on the 2D screen
      // Control the size of the circles in parameters 3 and 4 (currently they are 20)
      // Instead of an ellipse, consider using any of the other shapes in the p5 library
      // ellipse(pos.x, pos.y, 50, 50)

      stroke('white');
      strokeWeight(1);
      line(pos.x, pos.y, pos.x, pos.y);

    }
  }
}

function drawooooPath(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclon'));
    const longitude = Number(path.getString(i, 'reclat'));

    oooopathArrayOfPointsLat[i] = latitude;
    oooopathArrayOfPointsLon[i] = longitude;

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      // Step 2: Customize graphics
      // noStroke(); // Control stroke: https://p5js.org/reference/#/p5/stroke
      // fill(255, 255, 255, 10); // Control fill: https://p5js.org/reference/#/p5/fill
      // pos.x and pos.y are the x & y position on the 2D screen
      // Control the size of the circles in parameters 3 and 4 (currently they are 20)
      // Instead of an ellipse, consider using any of the other shapes in the p5 library
      // ellipse(pos.x, pos.y, 50, 50)

      stroke('white');
      strokeWeight(1);
      line(pos.x, pos.y, pos.x, pos.y);

    }
  }
}

function drawLinePath() {
  clear();
  stroke('white');
  strokeWeight(1);

  if (pathArrayOfPointsLat.length > 0){
    fill('rgba(0, 0, 0, 0)');
    beginShape();
    for (let i = 0; i < pathArrayOfPointsLat.length; i++) {
      // forEach(function (e) {
      var pos = myMap.latLngToPixel(pathArrayOfPointsLat[i], pathArrayOfPointsLon[i]);
      vertex(pos.x, pos.y);
    }



    endShape();
  }
}

function ooodrawLinePath() {

  stroke('white');
  strokeWeight(1);

  if (pathArrayOfPointsLat.length > 0){
    fill('rgba(0, 0, 0, 0)');
    beginShape();


    for (let i = 0; i < opathArrayOfPointsLat.length; i++) {
      // forEach(function (e) {
      var pos = myMap.latLngToPixel(opathArrayOfPointsLat[i], opathArrayOfPointsLon[i]);
      vertex(pos.x, pos.y);
    }

    endShape();
  }
}



function odrawLinePath() {
  stroke('white');
  strokeWeight(1);

  if (ooopathArrayOfPointsLat.length > 0){
    fill('grey');
    beginShape();


    for (let i = 0; i < oopathArrayOfPointsLat.length; i++) {
      // forEach(function (e) {
      var pos = myMap.latLngToPixel(oopathArrayOfPointsLat[i], oopathArrayOfPointsLon[i]);
      ellipse(pos.x, pos.y, 12, 12)
      stroke('yellow');
      strokeWeight(3);
      line(pos.x, pos.y, pos.x, pos.y);
    }

    endShape();
  }
}



function oodrawLinePath() {
  stroke('white');
  strokeWeight(1);

  if (ooopathArrayOfPointsLat.length > 0){
    fill('grey');
    beginShape();


    for (let i = 0; i < ooopathArrayOfPointsLat.length; i++) {
      // forEach(function (e) {
      var pos = myMap.latLngToPixel(ooopathArrayOfPointsLat[i], ooopathArrayOfPointsLon[i]);
      ellipse(pos.x, pos.y, 12, 12)
      stroke('red');
      strokeWeight(3);
      line(pos.x, pos.y, pos.x, pos.y);
    }

    endShape();
  }
}


function oooodrawLinePath() {

  stroke('white');
  strokeWeight(1);

  if (oooopathArrayOfPointsLat.length > 0){
    fill('rgba(0, 0, 0, 0)');
    beginShape();


    for (let i = 0; i < oooopathArrayOfPointsLat.length; i++) {
      // forEach(function (e) {
      var pos = myMap.latLngToPixel(oooopathArrayOfPointsLat[i], oooopathArrayOfPointsLon[i]);
      vertex(pos.x, pos.y);
    }

    endShape();
  }
}
