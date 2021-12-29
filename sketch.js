let zrapi;
let url = 'https://zombsroyale.io/api/shop/available';
let scroll = 0;
let timer = 0;
function preload() {
  zrapi = loadJSON(url);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(0);
  fill(0);
  translate(0, -scroll * 30);
  for(var i = scroll; i < scroll + floor((height - 50) / 30); i++) {
    fill(0);
    noStroke();
    switch(zrapi.items[i].rarity) {
      case 'Common':
      fill(180);
      break;
      case 'Uncommon':
      fill(0, 230, 20);
      break;
      case 'Rare':
      fill(0, 200, 255);
      break;
      case 'Epic':
      fill(138,43,226);
      break;
      case 'Legendary':
      fill(255,140,0);
      break;
      case 'Mythic':
      fill(220, 30, 30);
      break;
    }
    text(zrapi.items[i].name + ' \nType: ' + zrapi.items[i].type + ' SKU: ' + zrapi.items[i].sku, 20, 50 + i * 30);
    stroke(255);
    line(10, 38 + i * 30, width - 10, 38 + i * 30);
  }
  if(keyCode === UP_ARROW && scroll > 0 && timer >= 5) {
    scroll--;
    timer = 0;
  }
  if(keyIsPressed && keyCode === DOWN_ARROW && timer >= 5) {
    scroll++;
    timer = 0;
  }
  timer++;
}