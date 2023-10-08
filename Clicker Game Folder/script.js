const store = document.getElementById('store');
const restart = document.getElementById('restart');
const clickerSkins = document.getElementById('clicker-skins');
const backgroundColor = document.getElementById('background-skins');
const clickerContainer = document.getElementById('clicker-container');
const clickerElem = document.getElementById('clicker');
let counterContainer = document.getElementById('counter-container');
let counter = document.getElementById('counter');

let count = 0;

/* Store */

store.onclick = function(){

	/* Items */

	store.style.display = 'none';
	restart.style.display = 'none';
	clickerSkins.style.display = 'none';
	backgroundColor.style.display = 'none';
	clickerContainer.style.visibility = 'hidden';
	counterContainer.style.visibility = 'hidden';


	let exit2 = document.createElement('div');
	exit2.innerHTML = 'Exit';
	exit2.className = 'exit-btn2';
	document.body.append(exit2);

	let autoclicker = document.createElement('img');
	autoclicker.className = 'autoclicker';
	autoclicker.src = 'https://cdn4.iconfinder.com/data/icons/pixel-web-part-1/512/pointer2-1024.png';
	document.body.append(autoclicker);

	let cost_autoclicker = document.createElement('p');
	cost_autoclicker.className = 'autoclicker_cost';
	cost_autoclicker.innerHTML = '1000 Clicks Autoclicker';
	document.body.append(cost_autoclicker);

	exit2.onclick = function(){
		store.style.display = 'inherit';
		restart.style.display = 'inherit';
		clickerSkins.style.display = 'inherit';
		backgroundColor.style.display = 'inherit';
		clickerContainer.style.visibility = 'visible';
		counterContainer.style.visibility = 'visible';
		exit2.style.display = 'none';

		autoclicker.style.display = 'none';
		cost_autoclicker.style.display = 'none';

		
		h2.style.display = 'none';
		yesBtn.style.display = 'none';
		noBtn.style.display = 'none';
		exit.style.display = 'none';
		attention.style.display = 'none';
	}

	if(count == 2){
		autoclicker.onclick = function(){
			function clicking(){
				if(clickerElem.style.width == '200px' || clickerElem.style.height == '200px'){
					clickerElem.style.width = "170px";
					clickerElem.style.height = "170px";

					count++;
					counter.innerHTML = count;

				}else{
					clickerElem.style.width = "200px";
					clickerElem.style.height = "200px";
				}	
			}

			setInterval(clicking,100);
		}
	}else if(count < 2){
		autoclicker.disabled;
	}
	
}

/* Restart */

restart.onclick = function(){

	/* Removing Elements */

	store.style.display = 'none';
	restart.style.display = 'none';
	clickerSkins.style.display = 'none';
	backgroundColor.style.display = 'none';
	clickerContainer.style.visibility = 'hidden';
	counterContainer.style.visibility = 'hidden';

	/* Attention Element */

	document.body.style.background = '#e5e5d7';

	let attention = document.createElement('div');
	attention.className = 'attention__container';
	document.body.append(attention)

	let h2 = document.createElement('h2');
	h2.innerHTML = 'Are You Sure?';
	h2.className = 'title';
	attention.append(h2);

	let yesBtn = document.createElement('button');
	yesBtn.innerHTML = 'Yes';
	yesBtn.className = 'yesBtn';
	attention.append(yesBtn);

	let noBtn = document.createElement('button');
	noBtn.innerHTML = 'No';
	noBtn.className = 'noBtn';
	attention.append(noBtn);

	yesBtn.onclick = function(){
		document.body.style.background = 'white';

		store.style.display = 'inherit';
		restart.style.display = 'inherit';
		clickerSkins.style.display = 'inherit';
		backgroundColor.style.display = 'inherit';
		clickerContainer.style.visibility = 'visible';
		counterContainer.style.visibility = 'visible';

		attention.style.display = 'none';
		h2.style.display = 'none';
		yesBtn.style.display = 'none';
		noBtn.style.display = 'none';


		counter.innerHTML = 0;
	}

	noBtn.onclick = function(){

		document.body.style.background = 'white';

		store.style.display = 'inherit';
		restart.style.display = 'inherit';
		clickerSkins.style.display = 'inherit';
		backgroundColor.style.display = 'inherit';
		clickerContainer.style.visibility = 'visible';
		counterContainer.style.visibility = 'visible';

		attention.style.display = 'none';
		h2.style.display = 'none';
		yesBtn.style.display = 'none';
		noBtn.style.display = 'none';
	}

}

/* Clicker Skins */

clickerSkins.onclick = function(){
	store.style.display = 'none';
	restart.style.display = 'none';
	clickerSkins.style.display = 'none';
	backgroundColor.style.display = 'none';
	clickerContainer.style.visibility = 'hidden';
	counterContainer.style.visibility = 'hidden';

	/* SKINS */

	let skin1 = document.createElement('img');
	skin1.className = 'skin1';
	skin1.src = 'https://www.pinclipart.com/picdir/big/264-2647851_coins-clipart-vector-png-transparent-png.png';
	document.body.append(skin1);

	let skin2 = document.createElement('img');
	skin2.className = 'skin2';
	skin2.src = 'https://clipart-library.com/img1/1711660.png';
	document.body.append(skin2);

	if(count == 100){
		skin1.onclick = function(){
			clicker.src = 'https://www.pinclipart.com/picdir/big/264-2647851_coins-clipart-vector-png-transparent-png.png';
		}
	}else if(count < 100){
			clicker.src = 'https://www.game-ost.ru/static/covers_soundtracks/3/3/339970_399701.jpg';
	}

	if(count == 50){
		skin2.onclick = function(){
			clicker.src = 'https://clipart-library.com/img1/1711660.png';
		}
	}else if(count < 50){
		clicker.src = 'https://www.game-ost.ru/static/covers_soundtracks/3/3/339970_399701.jpg';
	}

	/* COST */

	let cost1 = document.createElement('p');
	cost1.className = 'cost1';
	cost1.innerHTML = '80 Clicks';
	document.body.append(cost1);

	let cost2 = document.createElement('p');
	cost2.className = 'cost2';
	cost2.innerHTML = '50 Clicks';
	document.body.append(cost2);

	/* EXIT */

	let exit = document.createElement('div');
	exit.innerHTML = 'Exit';
	exit.className = 'exit-btn';
	document.body.append(exit);

	exit.onclick = function(){
		skin1.style.display = 'none';
		cost1.style.display = 'none';
		skin2.style.display = 'none';
		cost2.style.display = 'none';
		exit.style.display = 'none';
		def.style.display = 'none';

		store.style.display = 'inherit';
		restart.style.display = 'inherit';
		clickerSkins.style.display = 'inherit';
		backgroundColor.style.display = 'inherit';
		clickerContainer.style.visibility = 'visible';
		counterContainer.style.visibility = 'visible';
	}

	/* DEFAULT SKIN */

	let def = document.createElement('div');
	def.innerHTML = 'Default Skin';
	def.className = 'default-btn';
	document.body.append(def);

	def.onclick = function(){
		clicker.src = 'https://www.game-ost.ru/static/covers_soundtracks/3/3/339970_399701.jpg';
	}

}

/* Background Color */

/* Clicker Element */

clickerElem.onclick = function(){
	if(clickerElem.style.width == '200px' || clickerElem.style.height == '200px'){
		clickerElem.style.width = "170px";
		clickerElem.style.height = "170px";

		count++;
		counter.innerHTML = count;

	}else{
		clickerElem.style.width = "200px";
		clickerElem.style.height = "200px";
	}

}