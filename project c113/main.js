function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(360, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill("#4ca3dd")
    rect(0, 0, 640, 20)
    fill("#0ff1ce")
    rect(0, 460, 640, 20)
    fill("#696969")
    rect(0, 0, 20, 480)
    fill("#bada55")
    rect(620, 0, 20, 480)
    fill("#daa520")
    circle(0, 0, 150)
    fill("#7fe5f0")
    circle(0, 460, 150)
    fill("#065535")
    circle(620, 0, 150)
    fill("#66cdaa")
    circle(620, 460, 150)
}

function take_snapshot() {
    save('student_name.png');
}
