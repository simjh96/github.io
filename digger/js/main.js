// dinoMIGHT
// setup canvas
"use strict";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth / 1.2);
const height = (canvas.height = window.innerHeight / 1.2);

// dino: https://www.flaticon.com/packs/dinosaur-avatars-situations
//  groundMove
//  hurt
//  jump
//  death
//  transform
//  state
//    club | spaceShip | dyno | ghost | drunk
//      duration
//      motion
class Dino {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.defaultSpeed = 5;
    this.speed = this.defaultSpeed;
    this.maxSpeed = 10;
    this.acc = 0.2;
    this.face = "../asset/dino/default.png";
    this.state = "club";

    // movement
    this.isUp = false;
    this.isDown = false;
    this.isLeft = false;
    this.isRight = false;
  }
  draw() {
    let img = new Image();
    img.onload = function () {
      ctx.globalAlpha = 1;
      ctx.drawImage(img, this.x, this.y);
    }.bind(this);
    img.src = this.face;
  }
  actionUpdate() {
    // change: face
    if (this.isUp) {
      // this.speed += this.acc;
      // this.y -= Math.min(this.speed, this.maxSpeed);
      this.face = this.face;
    }
    if (this.isDown) {
      // this.speed += this.acc;
      // this.y += Math.min(this.speed, this.maxSpeed);
      this.face = this.face;
    }
    if (this.isLeft) {
      // this.speed += this.acc;
      // this.x -= Math.min(this.speed, this.maxSpeed);
      this.face = "../asset/dino/leftRun.png";
    }
    if (this.isRight) {
      // this.speed += this.acc;
      // this.x += Math.min(this.speed, this.maxSpeed);
      this.face = "../asset/dino/defaultRun.png";
    }

    if (!(this.isUp || this.isDown || this.isLeft || this.isRight)) {
      this.speed = this.defaultSpeed;
      if (this.face == "../asset/dino/leftRun.png") {
        this.face = "../asset/dino/left.png";
      } else if (this.face == "../asset/dino/defaultRun.png") {
        this.face = "../asset/dino/default.png";
      }
    }
  }
}

// BackGround
//  scope
// background moves instead of character
//  background moves faster than trail
class BackGround {
  constructor(totalLength = 5 * width, horizon = height / 1.5) {
    this.horizon = horizon;
    this.totalLength = totalLength;
    this.bgUrl = "../asset/soil/background.jpg";

    // trees + ground
    this.groundUrl = "../asset/soil/ground.png";
    this.groundX = -1000;
    this.groundY = -200;
    this.treeUrls = ["../asset/soil/tree0.png", "../asset/soil/tree1.png", "../asset/soil/tree2.png"];
    this.trees = [];
    for (let i = 0; i < this.totalLength / 20; i++) {
      let coord = [Math.random() * totalLength, this.horizon];
      let treeUrl = this.treeUrls[Math.floor(Math.random() * this.treeUrls.length)];
      this.trees.push([treeUrl, coord]); // [["/tree1", [320px, 540px]], [], []...]
    }
    // movement
    this.defaultSpeed = 5;
    this.speed = this.defaultSpeed;
    this.maxSpeed = 10;
    this.acc = 0.2;
  }
  draw() {
    this.drawBg();
    this.drawGround();
    this.drawTrees();
  }
  drawBg() {
    let img = new Image();
    img.onload = function () {
      ctx.globalAlpha = 0.5;
      ctx.drawImage(img, 0, 0, width, height);
    }.bind(this);
    img.src = this.bgUrl;
  }
  drawGround() {
    let img = new Image();
    img.onload = function () {
      ctx.globalAlpha = 0.8;
      ctx.drawImage(img, this.groundX, this.groundY, this.totalLength, (height - this.horizon) * 5);
    }.bind(this);
    img.src = this.groundUrl;
  }
  drawTrees() {
    for (let i = 0; i < this.trees.length; i++) {
      let [treeUrl, [x, y]] = this.trees[i];
      let img = new Image();
      img.onload = function () {
        ctx.globalAlpha = 1;
        ctx.drawImage(img, x, y);
      }.bind(this);
      img.src = treeUrl;
    }
  }
  actionUpdate() {
    // change: speed
    if (this.isUp) {
      this.speed += this.acc;
      this.groundY += Math.min(this.speed, this.maxSpeed);
      for (const i in this.trees) {
        this.trees[i][1][1] += Math.min(this.speed, this.maxSpeed);
      }
    }
    if (this.isDown) {
      this.speed += this.acc;
      this.groundY -= Math.min(this.speed, this.maxSpeed);
      for (const i in this.trees) {
        this.trees[i][1][1] -= Math.min(this.speed, this.maxSpeed);
      }
    }
    if (this.isLeft) {
      this.speed += this.acc;
      this.groundX += Math.min(this.speed, this.maxSpeed);
      for (const i in this.trees) {
        this.trees[i][1][0] += Math.min(this.speed, this.maxSpeed);
      }
    }
    if (this.isRight) {
      this.speed += this.acc;
      this.groundX -= Math.min(this.speed, this.maxSpeed);
      for (const i in this.trees) {
        this.trees[i][1][0] -= Math.min(this.speed, this.maxSpeed);
      }
    }
  }
}

// item
//  life gain
//
function Item() {}

// monsters: https://www.flaticon.com/packs/monsters
//  groundMove
//  agro
//  dropItem
function Monster() {}

// init
let bg = new BackGround();
let dino = new Dino(width / 2, height / 1.5);

// canvas event listener
$(document).on("keydown", actionStart.bind(dino));
$(document).on("keydown", actionStart.bind(bg));
$(document).on("keyup", actionEnd.bind(dino));
$(document).on("keyup", actionEnd.bind(bg));

function actionStart(e) {
  if (e["key"] == "ArrowUp") this.isUp = true;
  if (e["key"] == "ArrowDown") this.isDown = true;
  if (e["key"] == "ArrowLeft") this.isLeft = true;
  if (e["key"] == "ArrowRight") this.isRight = true;
}
function actionEnd(e) {
  if (e["key"] == "ArrowUp") this.isUp = false;
  if (e["key"] == "ArrowDown") this.isDown = false;
  if (e["key"] == "ArrowLeft") this.isLeft = false;
  if (e["key"] == "ArrowRight") this.isRight = false;
}

// run
function loop() {
  // ctx.fillStyle = "rgb(0,255,255,0.5)";
  // ctx.fillRect(0, 0, width, height);

  bg.draw();
  dino.draw();
  bg.actionUpdate();
  dino.actionUpdate();
  requestAnimationFrame(loop);
}

loop();

// document.onload = function(){

//   // view용 canvas
//   var cnvsView = document.getElementById('cnvs_view');
//   var ctxView = cnvsView.getContext('2d');

//   // buffer용 canvas
//   var cnvsBuffer = document.createElement('canvas');
//   var ctxBuffer = cnvsBuffer.getContext('2d');

//   ctxBuffer.canvas.width = cnvsView.width;
//   ctxBuffer.canvas.height = cnvsView.height;

//   // 더블 버퍼링
//   // 1. buffer용 canvas에 그리기

//   var img = new Image();

//   img.src = 'http://이미지파일경로';

//   ctxBuffer.drawImage(img, 0, 0);

//   // 그 외 자잘한 뭔가를 한다고 가정....

//   // 원래는 타이머 등으로 프레임을 정해서 마구 그리는 정도는 되어야 번쩍거림...

//   // 2. view용 canvas에 그리기

//   ctxView.drawImage(cnvsBuffer, 0, 0);

// }
