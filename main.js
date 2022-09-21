noseX = 0;
noseY = 0;

function preload()
{
clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup()
{
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw()
{
    image(video, 0, 0, 400, 300);
    image(clown_nose, noseX - 20, noseY - 5, 40, 40);
}

function take_snapshot()
{
    save('myFilterImage.Png')
}