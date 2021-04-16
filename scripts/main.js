const LogicB = {
draw(){
if(!Vars.net.active() || lastAccessed == Vars.player.name) this.super$draw();
else Draw.rect(this.region, this.x, this.y);
}
};

LogicDisplay.buildType = () => {
  return extendContent(LogicDisplay.LogicDisplayBuild, ()
