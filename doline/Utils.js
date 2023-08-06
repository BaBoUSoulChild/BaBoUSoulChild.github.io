const COLORS = {
	"T1": 'rgb(200,200,200)',
	"T2": 'rgb(200,200,200)',
	"T3": 'rgb(200,200,200)',
	"T4": 'rgb(200,200,200)',
	"T5": 'rgb(200,200,200)',
	"T6": 'rgb(200,200,200)',
	"T7": 'rgb(200,200,200)',
	"TI": 'rgb(200,200,200)',
	"TII": 'rgb(200,200,200)'
}

function $(id) {
	return document.getElementById(id);
}

function UD(T, _y) {
	var Tab = '@';
	if(T.id.indexOf(Tab) === -1) {
		Tab = '$';
	}
	let [x, y] = T.id.split(Tab).map(x => +x);
	let N;
	y += _y;
	if(y < 0) {
		y = 0;
		--x;
		if(x < 0) {
			x = MV[Tab].length - 1;
			y = MV[Tab][MV[Tab].length - 1].army.length - 1;
		} else {
			y = MV[Tab][x].army.length - 1;
		}
		N = $(x + Tab + y);
	}
	if(y < MV[Tab][x].army.length) N = $(x + Tab + y);
	else {
		++x;
		if(MV[Tab].length >= x + 1) {
			N = $(x + Tab + 0);
		}
		else {
			N = $(0 + Tab + 0);
		}
	}
	N.focus()
}

function LR(T, _x) {
	var Tab = '@';
	if(T.id.indexOf(Tab) === -1) {
		Tab = '$';
	}

	let [x, y] = T.id.split(Tab).map(x => +x);
	let N;
	x += _x;
	if(x < 0) x = MV[Tab].length - 1;
	if(x >= MV[Tab].length) x = 0;
	if(MV[Tab][x].army.length - 1 <= y) y = MV[Tab][x].army.length - 1;
	N = $(x + Tab + y);
	N.focus();
}

function updateCompensation() {
	$('compo').innerText = "Compensation due (taxed)\nSilver " + format(Math.round(Sum(silver())));
	let v = 0;

	if($('4$0').value.length > 0) {
		v = +$('4$0').value * Player[4].army[0].cost;
	}
	let food = 0, wood = v, iron = v, stone = v;
	
	
	if($('1$0').value.length > 0) food += +$('1$0').value.replace(/ /g, '');
	if($('1$1').value.length > 0) wood += +$('1$1').value.replace(/ /g, '');
	if($('1$2').value.length > 0) iron += +$('1$2').value.replace(/ /g, '');
	if($('1$3').value.length > 0) stone += +$('1$3').value.replace(/ /g, '');
	
	
	if(food > 0) $('compo').innerText += '\nFood ' + format(Math.round(food / 0.8));
	if(wood > 0) $('compo').innerText += '\nLumber ' + format(Math.round(wood / 0.8));
	if(iron > 0) $('compo').innerText += '\nIron ' + format(Math.round(iron / 0.8));
	if(stone > 0) $('compo').innerText += '\nStone ' + format(Math.round(stone / 0.8));

}

function format(str) {
	str += '';
	return str.replace(/[^0-9\+]/g, '').replace('++', '+').replace(/ /g, '').replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

onkeydown = function(e) {
	let T = e.target;

	if(T.tagName == "INPUT" && !T.classList.contains("text")) {

			T.value = format(T.value);


		if('0123456789+'.indexOf(e.key) === -1) {

			var key = e.key.toLowerCase();
			if(e.keyCode === 40 || e.keyCode === 13 || key == 's') {
				UD(T, 1);
			}

			if(e.keyCode === 38 || key == 'w') {
				UD(T, -1);
			}

			if(key == 'a') {
				LR(T, -1);
			}

			if(key == 'd') {
				LR(T, 1);
			}

			if(key == 'c') {
				T.value = '';
				return true;
			}

			if(e.keyCode == 8 || e.keyCode == 46 || (e.keyCode >= 37 && e.keyCode <= 40)) {
				return true;
			}

			e.preventDefault();
			return false;
		}
	}
}


onkeyup = function(e) {
	let T = e.target;

	if(T.tagName == "INPUT" && !T.classList.contains("text")) {

			T.value = format(T.value);


		if('0123456789+'.indexOf(e.key) === -1) {
			if(e.keyCode == 8 || e.keyCode == 46) {
				updateCompensation();
			}
		} else {
			updateCompensation();
		}

	}
}

var STACK = [];

function populate(T, id, Tab, tier) {
	var H = Math.max(...T.map(x => x.army.length));
	var W = T.length * 2;

	var TB = document.createElement('table');

	var e = document.createElement('tr');
	for(var x = 0; x < W; x += 2) {
		let el = document.createElement('td');
		el.classList.add("head");
		el.innerText = T[x >> 1].group;
		e.appendChild(el);
		el = document.createElement('td');
		e.appendChild(el);
	}
	TB.appendChild(e);

	for(var y = 0; y < H; ++y) {
		e = document.createElement('tr');
		for(var x = 0; x < W; x += 2) {
			let _x = x >> 1;
			let S = T[_x];
			if(S.army.length >= y + 1) {
				let el = document.createElement('td');
				if(!S.army[y].blank) {
						if(tier) {
							el.innerHTML = S.army[y].tier + '&nbsp;' + S.army[y].name;
						} else {
							el.innerHTML = S.army[y].name;
						}
					el.classList.add(S.army[y].tier);
				}


				e.appendChild(el);

				el = document.createElement('td');
				if(!S.army[y].default) {
					el.innerHTML = '<input type="text" id="' + _x + Tab + y +'">';
				} else {
					el.innerHTML = '<input type="text" id="' + _x + Tab + y +'" value="' + format(S.army[y].default) + '"' + (S.army[y].disabled ? 'disabled="true"' : '') + '>';

				}

				STACK[STACK.length] = el.getElementsByTagName('input')[0];
				e.appendChild(el);
			} else {
				let el = document.createElement('td');
				e.appendChild(el);
				el = document.createElement('td');
				e.appendChild(el);
			}

		}
		TB.appendChild(e);
	}
	$(id).appendChild(TB);
}

function mightDiff(A, D) {
	var C = A / D;
	return Math.pow(C, 0.15);
}

function Sum(loss) {
	var acc = mightDiff(+($('0$0').value.replace(/ /g, '')), +($('0$1').value.replace(/ /g, ''))) * loss;
	return Math.round(acc / 0.8);
}

function silver() {
	if(+($('0$0').value.replace(/ /g, '')) >= +($('0$1').value.replace(/ /g, ''))) {
		$('3$3').value = Player[3].army[3].default;
	} else {
		$('3$3').value = Player[3].army[3].default;

	}
	const rev = 0.75, cost = 1 - rev;
	var acc = 0;
	var Tab = '@';
	var T = Soldiers;

	for(var i = STACK.length - 1; i >= 0; --i) {
		var w = STACK[i];

		if(w.value.length > 0) {
			if(w.id.indexOf('$') !== -1) {
				Tab = '$';
				T = Player;
			} else {
				Tab = '@';
				T = Soldiers;
			}

			let [x, y] = w.id.split(Tab).map(x => +x);

			var type = T[x].army[y].type
			if(type) continue;

			let _dx = w.value.replace(/^\+*/, '').replace(/\+$/, '').replace(/ /g, '');
			_dx = _dx.split(/\+/).map(r => +r).reduce((a, b) => a + b, 0);


			acc += Math.ceil(rev * _dx) * T[x].army[y].revive + Math.floor(cost * _dx) * T[x].army[y].cost;
		}
	}
	return +acc;
}

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

function save() {
	var TMP = {};
	for(var i = STACK.length - 1; i >= 0; --i) {
		var w = STACK[i];

		if(w.value.length > 0) {
			TMP[w.id] = w.value;
		}
		TMP.name = $('name').value;
	}
	download(JSON.stringify(TMP), 'Case ' + TMP.name + '.K98', 'text/plain');
}

function copy() {
	var TMP = {};
	for(var i = STACK.length - 1; i >= 0; --i) {
		var w = STACK[i];

		if(w.value.length > 0) {
			TMP[w.id] = w.value;
		}
		TMP.name = $('name').value;
	}
	var c = $('iwrite');
	c.value = JSON.stringify(TMP);
	c.select();
	c.setSelectionRange(0, c.value.length);
	navigator.clipboard.writeText(c.value);
}

function bwrite() {
	var data = $('iwrite').value;
	loadFile(data);
	setTimeout(updateCompensation, 100);
}

function loadFile(F) {
	var data = JSON.parse(F);
	for(var i = STACK.length - 1; i >= 0; --i) {
		STACK[i].value = '';
	}

	var keys = Object.keys(data);
	for(var i = keys.length - 1; i >= 0; --i) {
		$(keys[i]).value = data[keys[i]];
	}
}

function report(e) {
	var file = e.target.files[0];
	if(!file) {
		return;
	}

	var reader = new FileReader();
	reader.onload = function(e) {
		loadFile(e.target.result);
		setTimeout(updateCompensation, 100);
	};
	reader.readAsText(file);
}

function reportHost() {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', $("host-input").value, true);
	xhr.overrideMimeType("plain/text");
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			loadFile(xhr.responseText);
			setTimeout(updateCompensation, 100);
		}
	}

	xhr.send();
}

$('file-input').onchange = report;