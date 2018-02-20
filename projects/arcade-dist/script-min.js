!function(){var e={},t=[];function n(n){if(e[n])return e[n];var a=new Image;a.onload=function(){e[n]=a,o()&&t.forEach(function(e){e()})},e[n]=!1,a.src=n}function o(){var t=!0;for(var n in e)e.hasOwnProperty(n)&&!e[n]&&(t=!1);return t}window.Resources={load:function(e){e instanceof Array?e.forEach(function(e){n(e)}):n(e)},get:function(t){return e[t]},onReady:function(e){t.push(e)},isReady:o}}();var Engine=function(e){var t,n=e.document,o=e.window,a=n.createElement("canvas"),r=a.getContext("2d");function i(){var e=Date.now();!function(e){!function(e){Game.allGems.forEach(function(e){e.update()}),Game.player.update(),Game.allEnemies.forEach(function(t){t.update(e)})}(e)}((e-t)/1e3),function(){var e,t,n=["images/water-block.png","images/stone-block.png","images/stone-block.png","images/stone-block.png","images/grass-block.png","images/grass-block.png"];for(e=0;e<6;e++)for(t=0;t<5;t++)r.drawImage(Resources.get(n[e]),101*t,83*e);Game.allGems.forEach(function(e){e.render()}),Game.allRocks.forEach(function(e){e.render()}),Game.allEnemies.forEach(function(e){e.render()}),Game.player.render(),Game.renderGameProgress()}(),t=e,o.requestAnimationFrame(i)}a.width=505,a.height=606,r.font="bold 30px Pangolin",r.fillStyle="#ff0000",n.body.appendChild(a),Resources.load(["images/stone-block.png","images/water-block.png","images/grass-block.png","images/enemy-bug.png","images/char-boy.png","images/char-pink-girl.png","images/char-horn-girl.png","images/char-cat-girl.png","images/Gem-Green.png","images/Gem-Blue.png","images/Gem-Orange.png","images/Rock.png"]),Resources.onReady(function(){t=Date.now(),i()}),e.ctx=r}(this);const GameCharacter=function(e,t,n){this.x=e,this.y=t,this.sprite=n};GameCharacter.prototype.render=function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)},GameCharacter.prototype.isCollition=function(e){return Math.abs(this.x-e.x)<=30&&Math.abs(this.y-e.y)<=30};const Enemy=function(e,t,n,o){GameCharacter.call(this,e,t,n),this.speed=o};(Enemy.prototype=Object.create(GameCharacter.prototype)).constructor=Enemy,Enemy.prototype.outOfCanvasHandler=function(){return this.x>550},Enemy.prototype.move=function(e){this.x+=e*this.speed},Enemy.prototype.update=function(e){this.isCollition(Game.player)&&Game.playerCrashWithEnemy(),this.outOfCanvasHandler()?Game.enemyOutOfCanvas(this):this.move(e)};const Player=function(e,t,n){GameCharacter.call(this,e,t,n)};(Player.prototype=Object.create(GameCharacter.prototype)).constructor=Player,Player.prototype.isRoundCompleted=function(){return this.y<0},Player.prototype.initialPosition=function(){this.x=202,this.y=390},Player.prototype.moveLeft=function(){this.x>0&&(this.x-=101)},Player.prototype.moveRight=function(){this.x<404&&(this.x+=101)},Player.prototype.moveDown=function(){this.y<390&&(this.y+=83)},Player.prototype.moveUp=function(){this.y>-10&&(this.y-=83)},Player.prototype.update=function(){this.isRoundCompleted()&&(this.initialPosition(),Game.roundCompleted())},Player.prototype.handleInput=function(e){switch(e){case"left":this.moveLeft(),Game.allRocks.forEach(e=>{this.isCollition(e)&&this.moveRight()});break;case"right":this.moveRight(),Game.allRocks.forEach(e=>{this.isCollition(e)&&this.moveLeft()});break;case"up":this.moveUp(),Game.allRocks.forEach(e=>{this.isCollition(e)&&this.moveDown()});break;case"down":this.moveDown(),Game.allRocks.forEach(e=>{this.isCollition(e)&&this.moveUp()})}};const Gem=function(e,t,n,o){GameCharacter.call(this,e,t,n),this.color=o,this.value="Orange"===this.color?100:"Blue"===this.color?150:120};(Gem.prototype=Object.create(GameCharacter.prototype)).constructor=Gem,Gem.prototype.render=function(){GameCharacter.prototype.render.call(this),ctx.fillText(`${this.value}`,this.x+10,this.y+101)},Gem.prototype.update=function(){this.isCollition(Game.player)&&Game.playerCrashWithGem(this)};const Rock=function(e,t,n){GameCharacter.call(this,e,t,n)};(Rock.prototype=Object.create(GameCharacter.prototype)).constructor=GameCharacter;const Game=function(){const e=[60,143,226],t=[230,280,350],n=[[111,83],[414,83],[313,249],[10,166]],o=[[[10,83],[212,83],[212,166]],[[111,166],[313,166],[414,166]],[[10,249],[212,249],[313,83]]],a=["Orange","Blue","Green"];let r=null;const i=new Player(202,390,"images/char-cat-girl.png"),s=[],c=[],l=[];let m=0,u=0;const p=()=>Math.floor(Math.floor(3*Math.random())),h=()=>{if(u>0){let e=n[u-1],t=new Rock(e[0],e[1],"images/Rock.png");l.push(t)}else l.splice(0,4)},y=()=>{c.splice(0,c.length);for(let e=0;e<u;e++){let e=a[p()],t=o[p()][p()],n=new Gem(t[0],t[1],`images/Gem-${e}.png`,e);c.push(n)}},f=(e,t)=>{let n=t.indexOf(e);t.splice(n,1)},g=()=>{m=0,u=0,i.initialPosition(),r=setInterval(()=>{(()=>{let n=new Enemy(-101,e[p()],"images/enemy-bug.png",t[p()]);s.push(n)})()},700),y(),h()};function d(e){const t=document.getElementById("final-screen");document.getElementById("gameResult").innerText=e,document.getElementById("score").innerText=m,document.getElementById("rounds").innerText=u,clearInterval(r),t.classList.remove("close")}return{allEnemies:s,allGems:c,allRocks:l,player:i,roundCompleted:()=>{if(m+=50,5==++u)return d(m<=1e3?"Im Sorry!! You Loose!!":"Congratulations!! You are a winner!!");y(),h()},enemyOutOfCanvas:e=>{f(e,s)},playerCrashWithEnemy:()=>{if(m-=100,i.initialPosition(),m<0)return d("You can't have a negative score")},playerCrashWithGem:e=>{m+=e.value,f(e,c)},renderGameProgress:()=>{ctx.fillText(`Score: ${m}`,30,100),ctx.fillText(`Rounds: ${u}`,330,100)},choosePlayerHandler:function(e){let t=document.querySelector(".bouncing");e.preventDefault(),t&&t.classList.remove("bouncing"),e.target.classList.add("bouncing"),Game.player.sprite=e.target.getAttribute("src")},startGameHandler:function(e){let t=[].slice.call(document.querySelectorAll(".row"));e.preventDefault(),e.stopPropagation(),t.forEach(e=>{e.classList.contains("close")||e.classList.add("close")}),g()}}}();Resources.onReady(function(){const e=[].slice.call(document.querySelectorAll(".game-button"));[].slice.call(document.querySelectorAll(".player-input")).forEach(e=>{e.addEventListener("click",Game.choosePlayerHandler)}),e.forEach(e=>{e.addEventListener("click",Game.startGameHandler)}),document.addEventListener("keyup",e=>{e.preventDefault(),e.stopPropagation(),Game.player.handleInput({37:"left",38:"up",39:"right",40:"down"}[e.keyCode])})});