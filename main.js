function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    //video.size(600,550);
    video.hide();
    tint_color="";
    //poseNet=ml5.poseNet(video,modelLoaded);
    //poseNet.on('pose',gotPoses);
    
}



function modelLoaded(){
console.log('posenet is initialised');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);
    }
}


function draw(){
    image(video,230,150,220,200);
    tint(tint_color);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);
    circle(590,430,80);
    circle(50,430,80);
    circle(590,50,80);
    //lines
    fill(0,255,0);
    stroke(0,255,0);
    rect(90,40,460,20);
    rect(90,420,460,20);
    rect(40,90,20,300);
    rect(580,90,20,300);

}
function take_snapshot(){
    save('MyPic.jpg');
}