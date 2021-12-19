//External JS file for the memory game

/*this array holds all of the content hiding
under the cards, in JS it creates all of the
cards aswell. If we want more cards, add them here.*/
var memory_array = ['Tail','Tail','Bark','Bark','Fur','Fur','Collar','Collar','Walk','Walk','Vet','Vet','Paw','Paw','Howl','Howl'];
//this stores all of the memory values
var memory_values = [];
//stores the id for the memory tiles
var memory_tile_ids = [];
//keeps track of how many tiles ar fipped
var tiles_flipped = 0;


//this array shuffles all of the cards 
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
	
//function for generaing a new board
function newBoard(){
	//tiles go back to 0 each time a new board is generated
	tiles_flipped = 0; 
	//makes the output empty
	var output = '';
	//just run this line whenever you want to shuffle the Array
	memory_array.memory_tile_shuffle();
	//running a loop over the cards being shuffled
	for(var i = 0; i < memory_array.length; i++){
		//telling the tiles to flip over 
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	//put the output into the memory board
	document.getElementById('memory_board').innerHTML = output;
	
}	
//works 100% up to this point

function memoryFlipTile(tile,val){
	//if the tile.innerHTML is empty and memory_values is less than 2, is only when this  will run.
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		//if memory_values is 0 we will push the next piece of code 
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		//if one card is already flipped, this code will run 
		} else if(memory_values.length ==1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			//if both tiles match, we will add 2 to the 'tiles flipped' variable
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				//clear both arrays
				memory_values = [];
				memory_tile_ids = [];
				//check to see if the all tiles are flipped
				if(tiles_flipped == memory_array.length){
					//if the board is cleared, a new board will be generated with new tiles 
					alert("board cleared, generating new board");
					document.getElementById('memory_board').innerHTML = ""
					newBoard();
				} 
			} else {
			//connected to the 'if both tiles are flipped' condition
					function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'url(dog.jpg) no-repeat';
					tile_1.style.backgroundSize = "115px 115px";
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(dog.jpg) no-repeat';
					tile_2.style.backgroundSize = "115px 115px";
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
				//after 700 millisecinds, the 2 cards will flip back if they dont match
			}
		}
	}
}
 

//countdown timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
	var myVar = 
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
			//alert appears when the time is up
			alert("times up! game over.");
			//board dissapears after you press ok 
			clearInterval(myVar);
			var x = document.getElementById("memory_board");
			if (x.style.display === "none") {
				x.style.display = "block";
			} else {
				x.style.display = "none";
			}
        }
    }, 1000);
}

// start button 
function startButton(){
	// alert("you presssed the start button");
	var twoMinutes = 60 * 2,
		display = document.querySelector('#time');
		startTimer(twoMinutes, display);
		//button dissapears after you press it 
		var x = document.getElementById("myStartButton");
		if (x.style.display === "none") {
			x.style.display = "block";
			} else {
			x.style.display = "none";
			}
		
		}
 
		

//  help button 
function changeCSS() {
	var x = document.getElementById("rules");
	x.className = "showList";
	document.getElementById("rules").style.color = "white";	
	x.style.fontFamily = "Arial";
	x.style.fontSize = "larger";
}
//rules appear when you hover over the help button
function hideList1(){
	document.getElementById("rules").className = "hideList"
}						
