//Const and Vars
let cutWood = 0;
let woodCol = 0;
let energy = 100;

//cached elements
const elapsedWoodEl = document.getElementById("cutWood");
const woodColEl = document.getElementById("woodCol");
const btn = document.querySelector('button');

//Event Listeners
btn.addEventListener('click', storeWood);

//Functions
render();

setInterval(function() {
  cutWood++;
  render();
}, 1000);

function storeWood() {
  woodCol += cutWood;
  cutWood = 0;
  render();
}

function render() {
  //visualize all state using the document/DOM
  elapsedWoodEl.innerText = 
  "Chopped Wood: " + cutWood;
  woodColEl.innerText = 'Collected Wood: ' + woodCol;
}


