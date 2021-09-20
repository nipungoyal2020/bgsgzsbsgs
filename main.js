load = "";

function preload() {
    img1 = loadImage("ac.jpg");
    img2 = loadImage("ball.jpg");
    img3 = loadImage("cover.jpg");
    img4 = loadImage("cup.jpg");
    img5 = loadImage("dirt.jpg");
    img6 = loadImage("fan.jpg");
    img7 = loadImage("tv_dish.jpg");
    img8 = loadImage("tv.jpg");
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!") 
    status = true;
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(load, 0, 0, 380, 380);
    if (status != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            
            fill(r, g, b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r, g, b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function text1() {
    load = img1;
    document.getElementById("line").innerHTML = "We found 1 object";
}

function text2() {
    load = img2;
    document.getElementById("line").innerHTML = "We found 1 object";
}

function text3() {
    load = img3;
    document.getElementById("line").innerHTML = "We found 1 object";
}

function text4() {
    load = img4;
    document.getElementById("line").innerHTML = "We found 1 object";
}

function text5() {
    load = img5;
    document.getElementById("line").innerHTML = "We found 1 object";
}

function text6() {
    load = img6;
    document.getElementById("line").innerHTML = "We found 1 object";
}

function text7() {
    load = img7;
    document.getElementById("line").innerHTML = "We found 1 object";
}

function text8() {
    load = img8;
    document.getElementById("line").innerHTML = "We found 1 object";
}