function is_jump(tRex_x_pos, obstacle_x_pos, jump_dist){
if (Math.abs(obstacle_x_pos-tRex_x_pos)<jump_dist){return true}
}

function jump(){
var event = new Event('keydown');
    event.keyCode = 32;//keys(Runner.keycodes.JUMP)[0];
    event.which = event.keyCode;
    event.altKey = false;
    event.ctrlKey = true;
    event.shiftKey = false;
    event.metaKey = false;
    document.dispatchEvent(event);
}

var sec = setInterval(function(){

if (Runner.instance_.crashed) {inc=-30; Runner.instance_.restart()};
if (Runner.instance_.paused) Runner.instance_.play();

if (typeof (Runner.instance_.horizon.obstacles[0]) !== "undefined"){
    tRex_xPos = Runner.instance_.tRex.xPos
    obstacle_xPos = Runner.instance_.horizon.obstacles[0].xPos
    //console.log(obstacle_xPos, tRex_xPos)
    if (is_jump(obstacle_xPos, tRex_xPos, 90)){
        console.log('Jump')
        jump()
    }
}

},2);
