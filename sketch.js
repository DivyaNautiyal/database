var ball;
var db, pos;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    firebase.database().ref("ball/position").on ("value", read)
}

function draw(){
    background("white");

    if(keyDown(LEFT_ARROW)){
        write(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        write(1,0);
    }
    else if(keyDown(UP_ARROW)){
        write(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        write(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}


function write ( x, y ) {

    firebase.database().ref("ball/position").update( {
        x : ball.x + x ,
        y : ball.y + y 
    } )


}


function read ( data ) {
   pos = data.val ()

   ball.x = pos.x
   ball.y = pos.y



}