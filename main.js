nose_x = 0;
nose_y = 0;

function preload(){
    mask = loadImage('https://i.postimg.cc/t42Z9G9B/pf-s58-kut-4444-pom-1.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video, 0,0,300,300);
    //fill(255,0,0);
    //stroke(0,0,0);
    //circle(nose_x,nose_y,50);

    image(mask,nose_x-75,nose_y-57,150,150);
}

function take_snapshot(){
    save('_stayhomestaysafe_');
}

function modelLoaded(){
    console.log("the model has loaded as usual");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
        console.log("leftEar x = "+results[0].pose.leftEar.x);
        console.log("rightEar y = "+results[0].pose.rightEar.y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}